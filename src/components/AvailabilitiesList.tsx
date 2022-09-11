import React, { useEffect, useState } from 'react';
import { Field, useFormikContext } from 'formik';
import config from 'config';
import { formatDateRange } from 'utils/date';
import { InitValues } from 'consts/initValues';
import { Availability } from './AppointmentForm';
import { CircularProgress } from '@material-ui/core';

const SERVER_API_ENDPOINT = config.get('SERVER_API_ENDPOING', '/api');

type Props = {
  availabilities: Availability[];
  setAvailabilities: (list: Availability[]) => void;
};

export default function AvailabilitiesList(props: Props) {
  const { availabilities, setAvailabilities } = props;
  const formik = useFormikContext<InitValues>();

  const getAvailabilities = async () => {
    const response = await fetch(
      `${SERVER_API_ENDPOINT}/availabilities?practitionerId=${formik.values.practitionerId}`,
    );
    const parsedResponse = await response.json();
    setAvailabilities(parsedResponse);
  };

  useEffect(() => {
    setAvailabilities([]);
    formik.setFieldValue('availabilityId', '');
    if (formik.values.practitionerId) getAvailabilities();
  }, [formik.values.practitionerId]);

  let showList=availabilities.length || formik.values.practitionerId==='' 
  return (
    <div>
      {showList ? (
        <div className="avList">
          {availabilities.map((availability) => {
            return (
              <label key={availability.id}>
                <Field
                  type="radio"
                  name="availabilityId"
                  value={availability.id.toString()}
                />
                {formatDateRange({
                  from: new Date(availability.startDate),
                  to: new Date(availability.endDate),
                })}
              </label>
            );
          })}
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}

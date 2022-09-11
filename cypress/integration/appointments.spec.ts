describe('Technical test home page', () => {
	beforeEach(() => {
	  cy.visit('/appointments');
	});
  
	// Test case flow :
	// 1- get all appointment list count
	// 2- add appointment by filling the form
	// 3- click on book btn
	// 4- get all appointment list count should by greater by one
  
	it('Test add appointment', () => {
	  // request aliases
	  cy.intercept({
		method: 'POST',
		url: '/api/appointments',
	  }).as('addAppoint');
  
	  cy.get('#patientlist>label').eq(0).click();
	  cy.get('#practitionerlist>label').eq(0).click();
	  cy.get('.avList>label').eq(2).click();
  
	  cy.pick('appoint').then((appoints) => {
		let appointBefore = appoints.length;
		cy.contains('Book').click();
  
		cy.wait(['@addAppoint']).then(() => {
		  // wait for the post request
  
		  let appointAfter = 0;
		  cy.pick('appoint').then((appoints) => {
			appointAfter = appoints.length;
  
			expect(appointAfter).eqls(appointBefore + 1);
		  });
		});
	  });
	});
  
	// Test case flow :
	// 1- click book btn
	// 2- Two error msg should appear
	// 3- choos practitioner and patient
	// 4- click book btn
	// 5-one error msg should appear
  
	it('Test Validation form ', () => {
	  cy.contains('Book').click();
	  cy.get('.error').then((errors) => {
		expect(errors.length).equals(2);
		expect(errors[0].innerText).equals('Please choose patient');
		expect(errors[1].innerText).equals('Please assgin practitioner');
	  });
	  cy.get('#patientlist>label').eq(0).click();
	  cy.get('#practitionerlist>label').eq(0).click();
  
	  cy.get('.error').then((errors) => {
		expect(errors.length).equals(1);
		expect(errors[0].innerText).equals('Please choose appointment date');
	  });
	});
  });
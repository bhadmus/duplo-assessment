import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given(/^The application is launched and user is logged in$/, () => {
	return true;
});

Then(/^The user validates that the "([^"]*)" page is not empty$/, (args1) => {
	console.log(args1);
	return true;
});

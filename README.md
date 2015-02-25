# My Notes (Ajax Practice)

In this project, we will practice CRUD -- but with asynchronous Ajax requests this time.

In the end, this should be a single-page application, and I should be able to perform all actions without leaving the notes#index page.

## Part 1: Seed Data

Use the [Faker](https://github.com/stympy/faker) gem to add 100 notes.

## Part 2: Add a form to create

Add a form to create a new note to notes#index.

## Part 3: Ajaxify the delete link

When clicked, it should remove the note from the db and slideUp the note in the DOM.

## Part 4: Ajaxify the new form

When submitted, it should add a new note to the db and slideDown the note in the DOM.

## Part 5: Ajaxify the edit link

When clicked, it should replace the note with an edit form.

## Part 6: Ajaxify the update form

When submitted, it should replace the edit form with the updated note.

# Hints:

Remember, the recipe for Ajaxifying any action is:

 1. Add the `:remote => true` option to the link or form helper that you want to Ajaxify.
 1. Add support for `format.js` to the responder block of the action that you want to Ajaxify (if the scaffold didn't already give you a `respond_to` call, then add one).
 1. Create a .js.erb view template for the action.
 1. Write some jQuery in the view template to update the DOM.
 1. While Ajaxifying, it is often very helpful to create partials if you hadn't already, so that you don't have to manually write a bunch of HTML within JavaScript strings and then have to update markup in two places when it changes. Also, don't forget the `escape_javascript` (alias `j`) helper method that will remove characters from Ruby strings that are illegal in JavaScript strings.

## Good luck!


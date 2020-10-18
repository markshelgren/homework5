# homework5

#05 Third Party APIs: Work Day Scheduler

This is a very simple "Work" Day planner. It is being submitted in response to Homework Assignment 5

It uses "moment" javascript for date and time processing and allows a user to enter events into hourly buckets that are then saved to local storage to remain persistent.

The current hour of the current day is determined and used to colorize the input hourly boxes. Boxes for hours before the current hour are colorized with a background color of gray. Boxes for hours after the current hourt are coloized with a background color of green. The current hour input box is colorized with a background color of red.

The events and activities entered into the hourly boxes are saved using local storage and are retrieved when the calculator is started.

If the requirements were any more sophisticated time would have been invested using "daily" objects with 24 hours and the application would use significantly more array processing than has been engineered into this very simple version.

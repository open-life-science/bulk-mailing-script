# bulk-mailing-script

From Lilly Winfree, heavily modified. Original source unknown. 

## Usage: 

Use with google sheets. To match this script, set up a sheet with something like: 

```
Name, email address, email to send
Yo Yehudi, yo@someemail.org, "Hi Yo Whassup"
```

In the Google Sheets Extensions menu, go to "Apps Script" and set up a new project. 

Copy script.js into the main pane. 

Select the `sendsEmails()` script and press run to send emails, and/or try the print config method to see what sheet is active in the google sheet.

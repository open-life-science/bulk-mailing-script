function printSheetInfo(){
  Logger.log("Active sheet: " + SpreadsheetApp.getActiveSheet().getName());
  var config = configData();
  Logger.log("\nData.sheet: " + config.sheet.getName());
  Logger.log("\nData.subject: " + config.subject);
  Logger.log("\nData.messageCell: " + config.messageCell);
}

function configData() {
  var settings = {};
  settings.sheet = SpreadsheetApp.getActiveSheet();
  settings.subject = "PUT YOUR SUBJECT HERE";
  settings.cc = ""; // optional cc address for all email
  settings.startRow = 2;  // First row of data to process. starting at 2 means there is a header row which we don't try to email
  settings.numRows = 130;   // Number of rows to process
  settings.rowsInRange = 3;
  settings.messageCell = 2;
  // Fetch the range of cells 
  var dataRange = settings.sheet.getRange(settings.startRow, 1, settings.numRows, settings.rowsInRange);
  // Fetch values for each row in the Range.
  settings.data = dataRange.getValues();
  return settings;
}

function sendsEmails() {
  var settings = configData();
  var data = settings.data
  console.log(data)
  for (i in data) {
    var row = data[i];
    var emailAddress = row[1] + "," + settings.cc;  // this starts counting at 0
    if(emailAddress) {
      var message = row[settings.messageCell];
      Logger.log("\nSending mail to: " + emailAddress);
      MailApp.sendEmail(emailAddress, settings.subject, message);
    } else {
      Logger.log("\nNo email address for: " + row[0]);
    }
  }
}

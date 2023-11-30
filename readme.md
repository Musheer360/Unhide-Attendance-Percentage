# Unhide Attendance Percentage on Mobile

A Tampermonkey script to reveal the hidden attendance percentage on TMU attendance portal for mobile users.

## Installation

1. Make sure you have Tampermonkey installed in your browser.

2. Click [here](https://update.greasyfork.org/scripts/481078/Unhide%20Attendance%20Percentage%20on%20Mobile.user.js) to install the script.

3. Tampermonkey will prompt you to install the script. Click on "Install" to add the script to your Tampermonkey extensions.

### Bookmarklet Installation Method

Alternatively, you can use the following bookmarklet:

1. Copy the following code:

```javascript:(function(){var style=document.createElement('style');style.textContent='.visible-lg, .visible-md, .visible-sm, .visible-xs { display: initial!important; }';document.head.appendChild(style);})();```

2. Add a new bookmark on your browser and paste the code into the URL field; you can name the bookmark whatever you want.

3. When you open the attendance page on the portal, type your bookmark's name in the URL bar and click it.

4. The script will now be active, and you can see the previously hidden percentage.

## Usage

Once installed, the script will automatically unhide the subject-wise attendance percentage as well as date-wise attendance data on the TMU attendance portal for mobile users.

## Issues and Contributions

If you encounter any issues or have suggestions for improvements, feel free to open an issue or create a pull request.

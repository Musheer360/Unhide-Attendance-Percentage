// ==UserScript==
// @name         Unhide Attendance Percentage on Mobile
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Unhides attendance percentage on TMU attendance portal for mobile users
// @author       Musheer360
// @match        http://portal1.tmu.ac.in/Student/StudentAttendance.aspx
// @match        http://portal2.tmu.ac.in/Student/StudentAttendance.aspx
// @grant        GM_addStyle
// ==/UserScript==

(function () {
  "use strict";

  // Override CSS to make percentages visible on mobile
  GM_addStyle(
    ".visible-lg, .visible-md, .visible-sm, .visible-xs { display: initial!important; }"
  );
})();

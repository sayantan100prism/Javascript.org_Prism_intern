-->The type attribute: 
<script type="text/javascript"></script>


-->Script files are attached to HTML with the src attribute: 
<script src="/path/to/script.js"></script>

Here, /path/to/script.js is an absolute path to the script from the site root. 
One can also provide a relative path from the current page. For instance, src="script.js"



-->If src is set, the script content is ignored.
A single <script> tag can’t have both the src attribute and code inside.
This won’t work:

<script src="file.js">
  alert(1); // the content is ignored, because src is set
</script>

-->We must choose either an external <script src="…"> or a regular <script> with code.
The example above can be split into two scripts to work:

<script src="file.js"></script>
<script>
  alert(1);
</script>



-->In most editors, a line of code can be commented out by pressing the Ctrl+/ hotkey for a single-line comment 

-->Something like Ctrl+Shift+/ – for multiline comments (select a piece of code and press the hotkey). 

-->For Mac, try Cmd instead of Ctrl and Option instead of Shift.
// This script gets injected into any opened page
// whose URL matches the pattern defined in the manifest
// (see "content_script" key).
// Several foreground scripts can be declared
// and injected into the same or different pages.
window.addEventListener('load', (event) => {
    function stateChange(newState) {
        setTimeout(function () {
            // Select all elements that match the structure
           // Get all <script> elements on the page
var scripts = document.getElementsByTagName('script');

// Loop through each <script> element
for (var i = 0; i < scripts.length; i++) {
    // Check if the current <script> element has a nonce attribute
    if (!scripts[i].hasAttribute('nonce')) {
        // If it doesn't have a nonce attribute, set its display property to block
        scripts[i].style.display = 'block';
    }
}
            // Define the regular expression pattern to match "seth" (case insensitive)
var regex = /seth/gi;

// Find all <span> elements on the page
var spans = document.getElementsByTagName('span');

// Loop through each <span> element
for (var i = 0; i < spans.length; i++) {
    // Check if the text content of the <span> matches the regular expression pattern
    if (regex.test(spans[i].textContent)) {
        console.log(spans[i]);
        // Change the color of the matching <span> to red
        spans[i].style.color = 'red';
    }
}

            alert('this user is a misogynist!');
        }, 1000);
    }
    stateChange();

})
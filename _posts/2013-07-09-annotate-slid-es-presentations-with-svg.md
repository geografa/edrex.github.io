---
---
Today I experimented with annotating [slid.es](http://slid.es) presentations with SVG. It's *almost* there.

## How to add annotations:


 * Create an annotation image, such as an arrow, using [method draw](http://editor.method.ac/), a browser-based SVG editor.
 * Go to File > Save and copy the resulting URL. This is a base64 encoded data URL version of the image.
 * Paste the image data into the URL field on slid.es insert image form. I tried uploading an SVG file using the upload form but that didn't seem to work.
 * Now you can position your SVG annotation using 
 
## Caveats

 * You can't upload SVG using slid.es image upload form (I think it needs to be added to an extension whitelist)
 


## How I got here

At first, I was embedding SVG using the `<svg>` tag. This worked alright, and I could even mark individual shapes as fragments (incrementally shown elements), but it required switching to the code view frequently, and the slid.es UI didn't allow interacting with the SVG image. So, it wasn't broken per-se, but it kind of missed the point of using a GUI editor.

Then I hit on the idea of using lots of small external SVG images using the HTML `<img>` tag. This would allow the SVG images to be positioned within the GUI just like other images. Unfortunately, in 

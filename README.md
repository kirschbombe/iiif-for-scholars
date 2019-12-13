## IIIF for Scholars: Sharing, Consuming, and Annotating the Worlds Images

[Workshop slide deck](https://docs.google.com/presentation/d/e/2PACX-1vQFfsl0vXl0G9KnPZKlzJOABY_JSR-R2Q81331mI5Qp0cYUBAijbw8xjcGmYZ6dpAjONFvQuKjMXmP2/pub?start=false&loop=false&delayms=60000&slide=id.g48a2113b32_0_167)

Access to image-based resources (manuscripts, artworks, maps, etc.) is fundamental to research, scholarship and the transmission of cultural knowledge. Yet much of the Internet’s image-based resources are locked up in silos, with access restricted to bespoke, locally built applications. IIIF (International Image Interoperability Framework), a framework for interoperable image delivery, gives an unprecedented level of uniform and rich access to image-based resources hosted around the world enabling scholars to view, annotate, and remix digital images (http://iiif.io).

In this workshop, participants will learn basic IIIF concepts and technologies, and will work with IIIF-hosted content to explore the benefits and scholar use-cases through discussion and hands-on exercises. No prior experience is assumed, but you will need to bring a laptop and have a GitHub account to participate in all the hands-on exercises. If you do not already have one, you can sign up for a GitHub account here: https://github.com.

### Schedule (tentative)
* 10:30-10:45 -- Intro and Why IIIF?
* 10:45-11:15 -- The IIIF Image API
    * Explore: URI Parameters
    * Explore: IIIF & Deep Zoom
* 11:15-11:45 -- The IIIF Presentation API
    * Explore: Mirador
* 11:45-12:00 -- Break
* 12:00-12:30 -- IIIF manifests
    * Explore: IIIF manifests
* 12:30-1:00 -- Hands-on: Creating/editing a manifest
* 1:00-1:30 -- Setting up Mirador -or- Annotations

### Explore: URI Parameters
* Image API Playground: https://www.learniiif.org/image-api/playground
* Crop: https://jbhoward-dublin.github.io/IIIF-imageManipulation/index.html?imageID=https://iiif.ucd.ie/loris/ivrla:10408
* Image Request URI Syntax (IIIF documentation): https://iiif.io/api/image/2.1/#image-request-uri-syntax
* {scheme}://{server}{/prefix}/{identifier}/{region}/{size}/{rotation}/{quality}.{format}
    * http :// www.e-codices.unifr.ch/loris / cma/cma-1955-74 / cma-1955-74_000b.jp2 / 650,2300,1000,750 / pct:50 / 0 / default.jpg

### Explore: IIIF & Deep Zoom
* Pyramids - how IIIF enables Deep Zoom: http://tomcrane.github.io/presentations/tile-exploder.html

### Explore: Mirador
* Mirador demo: https://projectmirador.org/demo/
* Explore the menus and buttons
* Page through an item
* Zoom and pan
* Annotate an image
* Replace an item
* Remove/add a window
* Check out the Information panel
* https://iiif.archivelab.org/iiif/alberteinstein_03_reel03/manifest.json

### Explore: IIIF Manifests
* Let's go back to the Mirador demo and find the manifest for the van Gogh on the left
    * Copy the manifest link and open it in a browser, preferably Chrome. You can also download the manifest and open it in a good text editor with syntax highlighting (like Atom.io, or Text Wrangler).
    * Can you spot the components of a manifest that we just discussed?
    * Find one of the IIIF Image API URLs (Hint: there is one for each canvas)
    * What other information can we find in the manifest?
    * Click on the link to one of the image URLs to open the image in your browser. Can you manipulate the image using the IIIF Parameters that we learned earlier?

### Hands-on: Building a Manifest
* Building a manifest with the Bodleian Manifest Editor: http://dmt.bodleian.ox.ac.uk/manifest-editor/
* Export your new manifest. Now you can host this manifest and view it in any Mirador viewer (or Universal Viewer).
* Walk through hosting locally? GitHub?

### Hands-on: Set up your own Mirador
* The Mirador app is setup in our GitHub repo (see the `mirador` folder?)
* Since we are using GitHub Pages, we can view the live Mirador app in our browser by adding `/mirador` to our site URL (like we did with Leaflet-IIIF above)
* Back in the GitHub repo, view the `mirador` folder. You should see another folder, also named `mirador` and and `index.html` file. The `index.html` file is what we'll work with to customize our Mirador instance.
* Open the `index.html` file.
    * Take a look at the different sections. What info are we presenting? How does this correlate to what you see on in the live Mirador view?
    * We have one manifest available for viewing right now. How might you add the manifest that you created with the Bodleian editor?
* Let's play with some configurations: https://github.com/ProjectMirador/mirador/wiki/Configuration-Guides
    * How would you configure kabuki to load on open?
    * ...set the default view for kabuki to the Book Viewer?
    * ...configure Mirador to open with two object windows?

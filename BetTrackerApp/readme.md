# Challenge 5: Hybrid Mobile Applications

**NOTE:** If there are differences between this README.md or the Requirements.md with the Canvas assignment page. Then the Canvas assignment page will superseded the README or the Requirements.md pages. These pages are provided for convenience but the Canvas page is the main requirements resource.

_Due Friday, October 29 at 11:59:00pm_

_Submit through GitHub Classroom **AND** Canvas_

GitHub Classroom Link: [https://classroom.github.com/a/Cptr0J4X](https://classroom.github.com/a/Cptr0J4X)

For this challenge, you will design and develop a hybrid mobile application that you choose. The project must be the same technical level or higher and meeting the same requirements or better/more as listed here: [Hybrid App Idea](https://missouri.instructure.com/courses/42879/pages/hybrid-app-idea?module_item_id=2199275)

**Help with Decision:** If you need help on making a decision then let us know. The best project idea is something that interests you!

## Getting Started and GitHub Submission Link

To start the challenge, go to the GitHub Classroom link posted above.

Link your account, clone the repository, `cd` into the `code` directory, do an `npm install`, create a new `dev` branch, and create your application.

Make sure you start a new development branch. The master branch will be the production branch. At the end, when you are finished, do the final commit to development, and the final merge to master then push the master branch back up for grading. You can also push up your development branch so we can see all your commits.

**If you work the entire time on master, you will get points deducted.** This is not a good industry practice.

After pushing back to `origin` for the final submission, I recommend to go to your remote repository on GitHub, download the repository which will give you a zip file of your repo on your local machine, then submit that zip to canvas. The challenge submission will require both on GitHub and Canvas.

**Note:** Make sure the Canvas submission has all of the elements that are included in your GitHub submission which includes a link to the server, the raw code, the journal, and the Android and/or iOS version of the application. **_Make sure the canvas submission is up-to-date._**

## Overview

- These are some of the popular Hybrid and Cross-Platform frameworks available: [https://www.websoptimization.com/blog/hybrid-mobile-app-frameworks/](https://www.websoptimization.com/blog/hybrid-mobile-app-frameworks/)
- For this challenge, I want you to use Ionic so you can deploy your application on a mobile device.
- You will write about using hybrid apps compared to using native apps (strengths, limitations, usability) in the journal
- You will also write about the differences between hybrid apps, compared to cross-platform apps, and compared to progressive web apps, (the development process, strengths, limitations, usability) in the journal
  - Here is a good resource to read: [https://itcraftapps.com/blog/cross-platform-vs-native-vs-hybrid-vs-pwa-development/#1](https://itcraftapps.com/blog/cross-platform-vs-native-vs-hybrid-vs-pwa-development/#1)
- Ionic's own tutorial is at: [https://ionicframework.com/docs](https://ionicframework.com/docs)

## Requirements

Your challenge is to:

- Design and develop a hybrid mobile application that you choose. The project must be the same technical level or higher and meeting the same requirements or better/more as listed here: [Hybrid App Idea](https://missouri.instructure.com/courses/42879/pages/hybrid-app-idea?module_item_id=2199275)
- You must post your idea and resources you used to help you form your idea here in this discussion: [Shared Hybrid App Ideas](https://missouri.instructure.com/courses/42879/discussion_topics/752613) (20 points)
- The goal of this project is for you to combine the things that you've learned this semester into a working and useful application.
- The best project idea is something that interests you!
- This is also an opportunity to develop something that you can put in your portfolio to show a prospective employer.
- The application should not be trivial, but it should also not be so big and complex that you are unable to finish and test it.
- Now take this idea and build an Ionic application then transform it into a mobile application using Ionic. Use tutorials online to help you get the environment setup and how to create a mobile application for production.
- To see it run, you can launch the app on your phone.
- If you do not have a mobile device, you can use Android Studio's emulator or if you have a mac you can use Xcode's emulator.
- Your code will be graded on an actual mobile device so you will need to submit the actual compiled version of the app
- For android it is usually an `.apk` file or an `.aab` file
- For iOS it is usually an `.ipa` file
- If you can submit your application to the Google Play Store or the Apple App Store then you can get bonus points. For iOS, there are ways to submit your application without purchasing a license, for example you could use TestFlight and other various methods listed in the documentation.
- Your website will also work on a web browser like chrome, since it is developed using HTML, CSS, and Javascript (Essentially it is an Angular application using Ionic's UI Components and Application Wrapper). So for some updates you can simply use your browser using the command `ionic serve`
- The application should use responsive web design. You should use [Ionic's UI Components ](https://ionicframework.com/docs/components) but depending on what you are implementing, you may need to implement some of them yourself so make sure it is responsive across multiple types of devices.
- You will want your application to look good across multiple devices so you should test them on multiple devices
- Try running the mobile device emulator for a phone on Android Studio or XCode, then try testing your application for tablets, your app should look good across multiple devices.
- **Note:** If you run your application in Chrome's emulator to see what it looks like on different devices, that will change the viewport width, but it will not look like a native application. The only way to truly test is through the emulator or putting it on your actual device.
- If you want to make quick tests you can test in the browser, but remember we will be grading on an actual mobile device, so make sure your final tests are on a mobile device. You don't want to test the entire time in the browser and then come to find out your code worked and looked fine in the browser but does not work on a mobile device.
- Lastly, you will take what you did, put it on your instance, then submit your code, comparison file, and Android and/or iOS version of the application for grading.
- You can put an ionic app on the server similar to how you put an Angular application on the server by using the `ionic build` command. You will want to look at the documentation to make sure you are running the command properly.

**Note:** If you need help selecting an idea, you can look here for help: [Hybrid App Idea](https://missouri.instructure.com/courses/23851/pages/hybrid-app-idea)

**Note:** When we are grading the assignments, we will run it on a mobile device, so you will want to make sure you build your project using responsive web design with Ionic UI Components and your own styles so the content on the page resizes itself and looks good on many mobile devices (phones, tablets, etc.). Make sure you test this.

## Application Minimum Requirements

- Build a hybrid/cross-platform/progressive-web application
- The app must have more than one page/component
- The app must use proper routing techniques
- The app must collect user input
- The app must error check user input
- The app must be implemented in the proper MVC architecture
- The app must use interfaces for types and service files for data storage and data manipulation
- The app must have data persistence either client-side or server-side
- The layout and design of the user interface is up to you
  - Whatever you choose should be a well-organized, thoughtful, aesthetically pleasing, and a useable interface or an interface that logically makes sense. The layout should look like you made intentional choices and are in control of their placement. This means the layout should not be a disorganized mess that is a result of not knowing how to implement the user interface, layout, and/or code in a meaningful way.
- The app must use reactive forms
- The app must be responsive and work on several device types
  - desktop
  - tablet
  - and phone
- The app must follow best practices
  - Do not work on `master`
  - Well-Structured UI and code
- Your application should have data
  - If the TAs open up a blank application, then points will be deducted
  - Your application should have some "default" data similar to MVC challenge so the TAs can see what you built without having to enter a lot of data manually
- Overall Purpose
  - The web application you build is not to be trivial in simply meeting the technical requirements set forth in this document. Yes, you are to meet the requirements but you are also to build a web application that has a purpose and delivers functionality or capability. The requirements are parameters to be used in design and implementation of the application; they are not intended to be the end product. You should build a web application that you would be happy to show to a prospective employer or client. You should also make sure that you can complete the development by the due date.

## What and Where to Submit

**For GitHub:**

1. Raw Code
2. Journal with URL to your instance, Hybrid/Native comparison, and problems/solutions you faced with references
3. Andriod/iOS version of App
   - If you have a Mac you can submit either Android or iOS (Whichever you prefer).
   - If you are on a Windows, you will most likely only be able to submit an Android version due to OS limitations.
   - The android extension for apps is `.apk` or `.aab`
   - The iOS extension for apps is `.ipa`
4. Screenshots of your application running with the system clock.
   - Take screenshots of ALL your finished code
   - The system clock must contain the date/time to be valid
   - **Note:** Link the screenshots in your journal as in previous challenges

**For Canvas:**

1. Submit your URL to your instance using a "URL Submission" type
2. Then click on `Resubmit`, download your GitHub repository after your final submission and submit that zip file on Canvas and named it `<Pawprint>IonicF20.zip` where you replace `<Pawprint>` with your actual pawprint

**NOTE:** For canvas, you may submit two different submissions, the first submission will be a URL submission, where you will copy and paste your URL, then click submit. After the submission is successful, you will click on the big blue button called "Re-submit assignment", then do a second submission for a file upload. You will upload a zip file from your final GitHub submission. On your end it will look like you only submitted the zip file but on our end we will see both submissions.

## Notes:

1. There is a `code` directory in the GitHub classroom template, this is where your raw code will go. Make sure you do not submit any build code here.
2. There is an `apps` directory in the GitHub classroom template, this is where your actual app files will go. If you develop iOS it will be an `.ipa` file, if you develop Android it will be an `.apk` or `.aab` file.
3. There is a `journal` directory, this is where your markdown `.md` file will go for the journal. Please link your screenshots in the journal as in previous challenges. Place your URL link in the journal. As well as your Hybrid/Native comparison, and any problems/solutions you faced with references on how you overcame them.
4. There is a `screenshots` directory, you can place your screenshots there, but please link them in your journal.

## Help

If there is anything unclear about what you need to do please let me or the TAs know. If you need help, office hours are located under Modules -> Course Information -> Office Hours and TA Information

## Due date/time

This challenge will be **due at 11:59:00PM on Friday, October 29**. Therefore, you will have approximately 1 week to complete this assignment. This includes pushing your code to GitHub classroom, submitting the downloaded zip from GitHub on Canvas, and posting the discussion.

**NOTE:** Remember to complete the discussion board.
**NOTE:** Remember to submit link and zip file on Canvas

---

> © 2020 Professor Wergeles. All rights reserved.
> _This document is provided with the materials for an educational course and are meant for personal use by the student while participating in the course and is not to be distributed to others._

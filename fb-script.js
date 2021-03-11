const postField = document.querySelector("div.cjfnh4rs form[method='POST']");

const photoField = document.querySelector("div.g5ia77u1:nth-child(3)");

const messengerField = document.querySelector("div.datstx6m:nth-child(3)");

const oatField = document.querySelector(".rl25f0pe > span:nth-child(1) > div:nth-child(1)");

const timeField = document.querySelector(".tn0ko95a > div:nth-child(2)");

const shadowField = document.querySelector(".sn7ne77z > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(2)");

//Popup Functions Section

// For the post box popup
function createInfoPopUp (e) {
  // first it creates a div element
  const div = document.createElement('div')
  div.classList.add('container');
  // then it adds some content inside the div
  div.innerHTML = `
  <button type="button" onclick="return this.parentNode.remove();" style="float:right; border-radius:10%; border:none; padding:5px; background-color:#1877f2; color:white; cursor: pointer;">Close</button>
  <h1 style="text-align:center; font-size:20px;">Post Box</h1>
  <p>In 2013, Facebook conducted a study that tracked <b>users' post-box</b> to determine if and how they self censored themselves on the platform. Facebook tracked content written in the post box that was five or more characters long. The content would be marked as “censored”, if it was not posted within ten minutes of its creation.
</p>
  <p>Facebook researchers found that over 71% of users self-censored their content; men self censored more than women (especially if they had more male friends), and older users self censored more than younger users.</p>
  <p>Alexis Madrigal in his Atlantic article about the topic discusses the importance of this study: Facebook’s model depends on users sharing, whether it be through their own posts or comments. The more users self censor and decide not to post, Facebook “loses value from the lack of content generation.”</p>

<h2>Find Out More Information</h2>
    <ul>
      <li><a href="https://www.theatlantic.com/technology/archive/2013/04/71-of-facebook-users-engage-in-self-censorship/274982/" target="_blank">71% of Facebook Users Engage in 'Self-Censorship' - The Atlantic</a></li>
      <li><a href="https://research.fb.com/wp-content/uploads/2016/11/self-censorship-on-facebook.pdf" target="_blank">Self-Censorship on Facebook (Research Report)</a></li>
    </ul>
  `

  div.style.backgroundColor = '#f6f6f6'
  div.style.fontSize = '14px'
  div.style.color = '#1877f2'
  div.style.maxWidth = '400px'
  div.style.border = '2px solid #1877f2'
  div.style.borderRadius = '6px'
  div.style.padding = '20px'
  div.style.position = 'absolute'
  div.style.left = `${e.clientX}px`
  div.style.top = `${e.clientY}px`

  document.body.appendChild(div)
}

//For the Photo Button Pop Up
function createPhotoPopUp (e) {
  // first it creates a div element
  const divOne = document.createElement('div')
  // then it adds some content inside the div
  divOne.innerHTML = `
  <button type="button" onclick="return this.parentNode.remove();" style="float:right; border-radius:10%; border:none; padding:5px; background-color:#1877f2; color:white; cursor: pointer;">Close</button>
<h1 style="text-align:center; font-size:20px;">Photo Tagging</h1>


    <p>Facebook’s old photo tagging system (in use until 2019), used facial recognition technology to analyze photos and store face templates which were used to make tagging suggestions. </p>
    <p>Facebook faced a class action lawsuit by Illinois users for this facial recognition technology as Illinois has a law governing the use of biometric data: Illinois Biometric Information Protection Act: “That law says companies can't collect, store, or give out "biometric data," which includes things like face or fingerprint scans, without first giving notice and getting consent.”</p>
    <p>Facebook’s new facial recognition setting is very similar, it creates a template to use and compare to other camera based media to determine if you are present. </p>
    <p></p>

<h2>Find Out More Information</h2>
    <ul>
      <li><a href="https://www.theguardian.com/technology/2021/feb/27/facebook-illinois-privacy-lawsuit-settlement " target="_blank">
Judge approves $650m settlement of privacy lawsuit against Facebook - The Guardian</a></li>
      <li><a href="https://www.nbcchicago.com/news/local/illinois-facebook-users-can-now-file-claims-for-payouts-in-650-million-lawsuit-settlement/2342967/" target="_blank">Illinois Facebook Users Can Now File Claims for Payouts in $650 Million Lawsuit Settlement - NBC 5 Chicago</a></li>
      <li><a href="http://www.facebookbipaclassaction.com/faq.aspx" target="_blank">Facebook Biometric Privacy Litigation FAQ</a></li>
    </ul>
  `
    divOne.style.backgroundColor = '#f6f6f6'
    divOne.style.fontSize = '14px'
    divOne.style.color = '#1877f2'
    divOne.style.maxWidth = '400px'
    divOne.style.border = '2px solid #1877f2'
    divOne.style.borderRadius = '6px'
    divOne.style.padding = '20px'
    divOne.style.position = 'absolute'
    divOne.style.left = `${e.clientX}px`
    divOne.style.top = `${e.clientY}px`

  document.body.appendChild(divOne)
}

//Messenger Pop up
function createMessengerPopUp (e) {

  const divTwo = document.createElement('div')

  divTwo.innerHTML = `
  <button type="button" onclick="return this.parentNode.remove();" style="float:right; border-radius:10%; border:none; padding:5px; background-color:#1877f2; color:white; cursor: pointer;">Close</button>
<h1 style="text-align:center; font-size:20px;">Messenger</h1>

    <p>Facebook Messenger does not use end to end encryption (a system that prevents one’s data from being read or modified by third parties by encrypting the data when sent and decrypts when accessed by the “true” recipient). So your private conversations are at risk of being accessed by an unknown third party.
</p>
    <p>Facebook also revealed that it allowed private contractors to listen in to Facebook users utilizing the audio to text functionality in Messenger. This audio data can be saved and utilized by Facebook as part of your “profile” for later. Whether or not you view the conversations as part of your Messenger as private or not, this information could be used by Facebook for research or commercial purposes. </p>
    <p></p>

    <h2>Find Out More Information</h2>
    <ul>
      <li><a href="https://www.forbes.com/sites/zakdoffman/2020/07/25/why-you-should-stop-using-facebook-messenger-encryption-whatsapp-update-twitter-hack/?sh=31b400db69ad" target="_blank">Why You Should Stop Using Facebook Messenger - Forbes</a></li>
      <li><a href="https://www.forbes.com/sites/kateoflahertyuk/2020/01/11/facebooks-new-admission-just-gave-1-billion-messenger-users-a-reason-to-switch/?sh=5445300a4096" target="_blank">Facebook’s New Messenger Admission: A Reason To Quit?</a></li>
    </ul>
  `

  divTwo.style.backgroundColor = '#f6f6f6'
 divTwo.style.fontSize = '14px'
 divTwo.style.color = '#1877f2'
 divTwo.style.maxWidth = '400px'
 divTwo.style.border = '2px solid #1877f2'
 divTwo.style.borderRadius = '6px'
 divTwo.style.padding = '20px'
 divTwo.style.position = 'absolute'
 divTwo.style.left = `50%`
 divTwo.style.top = `20px`


  document.body.appendChild(divTwo)
}

//Off Activity Tracking Pop Up
 function createOatPopUp (e) {

  const divThree = document.createElement('div')

  divThree.innerHTML = `
  <button type="button" onclick="return this.parentNode.remove();" style="float:right; border-radius:10%; border:none; padding:5px; background-color:#1877f2; color:white; cursor: pointer;">Close</button>
  <h1 style="text-align:center; font-size:20px;">Off Activity Tracking</h1>


    <p>The Facebook Off Activity Tracking (OAT) page is a summary of Facebook’s tracking of your non-Facebook activity, mobile and desktop. You may not have heard or seen this page as it is hidden behind various menus. According to Facebook, OAT tracks information as such:</p>
    <p></p>
    <p></p>
    <ul style="color:#292929;">
      <li style="padding-bottom:5px;">-Apps opened on your phone <em>(with or without Facebook connection in app)</em>
</li>

      <li style="padding-bottom:5px;">-Content viewed on those apps</li>

      <li style="padding-bottom:5px;">-Item search results, your shopping cart and purchase history, and donations.
</li>

      <li style="padding-bottom:5px;">-Businesses partnered with Facebook will send this information to the company. (and companies are not required to explain in detail what parts of our data they are sending to Facebook)</li>

      <li>-Facebook also <b>does not disclose ALL of the details</b> of your OAT summary: “For technical and accuracy reasons, <b>we don’t show all the activity we’ve received</b>. This includes things like information we’ve received when you’re not logged into Facebook, or when we can’t confirm that you’ve previously used Facebook on that device. We also don’t show details like the item you’ve added to your shopping cart.” (Facebook)
</li>
    </ul>

    <p>Geoffry Fowler in <a href="https://www.washingtonpost.com/technology/2020/01/28/off-facebook-activity-page/" target="_blank">his Washington Post Article</a> gives a few examples of what this means in practice: “Thanks to the “Off-Facebook Activity” tool, I now know that Home Depot told Facebook when I visited its online store, viewed an item or added an item to a shopping cart. The Atlantic shared the pages I viewed and devices I used, which it says inform its distribution strategy and help it target campaigns.” </p>

<h2>Find Out More Information</h2>
    <ul>
      <li><a href="https://www.washingtonpost.com/technology/2020/01/28/off-facebook-activity-page/" target="_blank">Facebook will now show you exactly how it stalks you — even when you’re not using Facebook - The Washington Post</a></li>
      <li><a href="https://www.facebook.com/help/2207256696182627" target="_blank">Facebook Off Activity Tracking Help Page</a></li>

    </ul>
  `
  // then i add the CSS i want to that div
  divThree.style.backgroundColor = '#f6f6f6'
  divThree.style.fontSize = '14px'
  divThree.style.color = '#1877f2'
  divThree.style.maxWidth = '400px'
  divThree.style.border = '2px solid #1877f2'
  divThree.style.borderRadius = '6px'
  divThree.style.padding = '20px'
  divThree.style.position = 'absolute'
  divThree.style.left = `60%`
  divThree.style.top = `10%`

  document.body.appendChild(divThree)
}

//Timeline pop up
function createTimePopUp (e) {

 const divFour = document.createElement('div')

 divFour.innerHTML = `
 <button type="button" onclick="return this.parentNode.remove();" style="float:right; border-radius:10%; border:none; padding:5px; background-color:#1877f2; color:white; cursor: pointer;">Close</button>
 <h1 style="text-align:center; font-size:20px;">Timeline</h1>


   <p>In 2012, Facebook altered the timelines of almost 700,000 users to determine if seeing more positive or negative messages would affect their mood. They tracked the effect of this altered timeline by tracking if the user’s subsequent posts contained more “positive” or “negative” words. Their findings determined that users with more positive timelines posted positive posts, and users with negative timelines posted more negative posts. When timelines were altered to be more balanced (no more positive or negative) users posted less.</p>
   <p>This study’s findings are worrying due to the potential Facebook (and other social media platforms) can have on manipulating user emotion on a large scale. Will timelines be manipulated to affect a user’s thoughts/emotions about a product, political campaign, or crisis?
</p>

<h2>Find Out More Information</h2>

   <ul>
     <li><a href="https://www.theatlantic.com/technology/archive/2014/06/everything-we-know-about-facebooks-secret-mood-manipulation-experiment/373648/" target="_blank">Everything We Know About Facebook's Secret Mood Manipulation Experiment - The Atlantic</a></li>
     <li><a href="https://www.npr.org/sections/alltechconsidered/2014/06/30/326929138/facebook-manipulates-our-moods-for-science-and-commerce-a-roundup" target="_blank">Facebook Manipulates Our Moods For Science And Commerce: A Roundup - NPR</a></li>

   </ul>
 `
 // then i add the CSS i want to that div
 divFour.style.backgroundColor = '#f6f6f6'
 divFour.style.fontSize = '14px'
 divFour.style.color = '#1877f2'
 divFour.style.maxWidth = '400px'
 divFour.style.border = '2px solid #1877f2'
 divFour.style.borderRadius = '6px'
 divFour.style.padding = '20px'
 divFour.style.position = 'absolute'
 divFour.style.left = `${e.clientX}px`
 divFour.style.top = `${e.clientY}px`

 document.body.appendChild(divFour)
}

//Shadow Profile Popup
function createShadowPopUp (e) {

 const divFive = document.createElement('div')

 divFive.innerHTML = `
 <button type="button" onclick="return this.parentNode.remove();" style="float:right; border-radius:10%; border:none; padding:5px; background-color:#1877f2; color:white; cursor: pointer;">Close</button>
 <h1 style="text-align:center; font-size:20px;">Shadow Profile</h1>


   <p>A Shadow Profile is a collection of data Facebook has about its users. Facebook collects data from its users to create profiles from their personal information: contact lists from phone numbers and emails, photos, home addresses and more.</p>
   <p>Though founder Mark Zuckerberg did not acknowledge their existence during his congressional testimony in 2018, Facebook’s shadow profiles have been known about since a 2012 data breach of over six million users revealed its existence. </p>
   <p>Even if you do not use Facebook, there may be a shadow profile containing your face template from a photo someone shared or your contact information from friends using the “Find My Friends” feature.
</p>
   <p>The extent of data collecting Facebook has done in terms of shadow profiles is alarming. We must question how much of our personal data we truly consent for Facebook to use and if we want to continue allowing the company to mine our private lives for their monetary gain. </p>

<h2>Find Out More Information</h2>

   <ul>
     <li><a href="https://theconversation.com/shadow-profiles-facebook-knows-about-you-even-if-youre-not-on-facebook-94804" target="_blank">Shadow profiles - Facebook knows about you, even if you’re not on Facebook</a></li>
     <li><a href="https://medium.com/@SpiderOak/facebook-shadow-profiles-a-profile-of-you-that-you-never-created-302f99f20930" target="_blank">Facebook Shadow Profiles: A Profile of You That You Never Created</a></li>

   </ul>
 `
 // then i add the CSS i want to that div
 divFive.style.backgroundColor = '#f6f6f6'
 divFive.style.fontSize = '14px'
 divFive.style.color = '#1877f2'
 divFive.style.maxWidth = '400px'
 divFive.style.border = '2px solid #1877f2'
 divFive.style.borderRadius = '6px'
 divFive.style.padding = '20px'
 divFive.style.position = 'absolute'
 divFive.style.left = `${e.clientX}px`
 divFive.style.top = `${e.clientY}px`

 document.body.appendChild(divFive)
}

//Event Listeners
postField.addEventListener('click', createInfoPopUp, {once:true});

photoField.addEventListener('click', createPhotoPopUp, {once:true});

messengerField.addEventListener('click', createMessengerPopUp, {once:true});

oatField.addEventListener('click', createOatPopUp, {once:true});

timeField.addEventListener('mouseover', createTimePopUp, {once:true});

shadowField.addEventListener('mouseover', createShadowPopUp, {once:true});

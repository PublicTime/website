---
layout: basic
title: Blogging Like a Hacker
description: This is the description for the donate page
permalink: /donate.html

---


<!-- {{ content }} -->


<div class="home__section">
  <h1 class="home__title">Bring Time to the World</h1>
  <p class="home__sub-title">
    Your donations help us to provide the public with unrestricted access to highly-accurate time sources around the
    globe.
  </p>

</div>
<div class="home__section">
    <p class="donate__info">
      By donating
      <span class="select-style">
        <select name="donations" id="select-value" tabindex="0">
          <option value="500" class="select-value" selected>$5.00</option>
          <option value="1000" class="select-value">$10.00</option>
          <option value="2000" class="select-value">$20.00</option>
          <option value="5000" class="select-value">$50.00</option>
          <option value="10000" class="select-value">$100.00</option>
          <option value="" class="select-value">Enter a value</option>
        </select>
      </span>
      <span class="donate__underline hide"></span>
      <input type="text" class="donate__input" id="donateInput">   you'll be providing people with hours of servers
      access.
    </p>
    <div class="donate__form">
    <div class="donate">
      <h4 class="donate__title">Personal Info</h4>
      <div class="connect__input-wrap donate__half">
        <input name="first_name" class="connect__input">
        <label class="connect__label">First Name</label>
        <p class="donate__error" id="firstNameError"></p>
      </div>
      <div class="connect__input-wrap donate__half">
        <input name="last_name" class="connect__input">
        <label class="connect__label">Last Name</label>
        <p class="donate__error" id="lastNameError"></p>
      </div>
      <div class="connect__input-wrap donate__half">
        <input name="email" class="connect__input">
        <label class="connect__label">Email</label>
        <p class="donate__error" id="emailError"></p>
      </div>
      <h4 class="donate__title">Billing Info</h4>
      <div class="connect__input-wrap donate__half">
        <input name="address" class="connect__input">
        <label class="connect__label">Address Line 1</label>
        <p class="donate__error" id="addressError"></p>
      </div>
      <div class="connect__input-wrap donate__half">
        <input name="line_2" class="connect__input">
        <label class="connect__label">Address Line 2</label>
      </div>
      <div class="connect__input-wrap donate__half">
        <input name="city" class="connect__input">
        <label class="connect__label">City</label>
        <p class="donate__error" id="cityError"></p>
      </div>
      <div class="connect__input-wrap donate__quarter donate__quarter--small">
        <input name="state" class="connect__input">
        <label class="connect__label">State / Province / Region</label>
        <p class="donate__error" id="stateError"></p>
      </div>
      <div class="connect__input-wrap donate__quarter">
        <input name="zip" class="connect__input">
        <label class="connect__label">ZIP / Postal Code</label>
        <p class="donate__error" id="zipcodeError"></p>
      </div>
      <div class="relative arrow-bg donate__width">
        <select class="donate__country"></select>
      </div>
      <h4 class="donate__title">Credit Card Info</h4>
      <div class="connect__input-wrap donate__half donate__stripe">
        <div id="card-element">
          <!-- a Stripe Element will be inserted here. -->
        </div>
        <!-- Used to display form errors -->
        <div id="card-errors" role="alert"></div>
      </div>
      <p class="donate__button donate__button--submit" id="connect-submit">Donate $5.00</p>
      <p class="donate__processing" id="donation-processing"></p>
    </div>


  </div>
  <div id="amznCharityBanner">
    <script type="text/javascript">(function() {var iFrame = document.createElement('iframe'); iFrame.style.display = 'none'; iFrame.style.border = "none"; iFrame.width = 310; iFrame.height = 256; iFrame.setAttribute && iFrame.setAttribute('scrolling', 'no'); iFrame.setAttribute('frameborder', '0'); setTimeout(function() {var contents = (iFrame.contentWindow) ? iFrame.contentWindow : (iFrame.contentDocument.document) ? iFrame.contentDocument.document : iFrame.contentDocument; contents.document.open(); contents.document.write(decodeURIComponent("%3Cdiv%20id%3D%22amznCharityBannerInner%22%3E%3Ca%20href%3D%22https%3A%2F%2Fsmile.amazon.com%2Fch%2F82-2301559%22%20target%3D%22_blank%22%3E%3Cdiv%20class%3D%22text%22%20height%3D%22%22%3E%3Cdiv%20class%3D%22support-wrapper%22%3E%3Cdiv%20class%3D%22support%22%20style%3D%22font-size%3A%2025px%3B%20line-height%3A%2028px%3B%20margin-top%3A%2015px%3B%20margin-bottom%3A%2015px%3B%22%3ESupport%20%3Cspan%20id%3D%22charity-name%22%20style%3D%22display%3A%20inline-block%3B%22%3EPublicNTP%2C%20Inc..%3C%2Fspan%3E%3C%2Fdiv%3E%3C%2Fdiv%3E%3Cp%20class%3D%22when-shop%22%3EWhen%20you%20shop%20at%20%3Cb%3Esmile.amazon.com%2C%3C%2Fb%3E%3C%2Fp%3E%3Cp%20class%3D%22donates%22%3EAmazon%20donates.%3C%2Fp%3E%3C%2Fdiv%3E%3C%2Fa%3E%3C%2Fdiv%3E%3Cstyle%3E%23amznCharityBannerInner%7Bbackground-image%3Aurl(https%3A%2F%2Fm.media-amazon.com%2Fimages%2FG%2F01%2Fx-locale%2Fpaladin%2Fcharitycentral%2Fbanner-background-image._CB309675353_.png)%3Bwidth%3A300px%3Bheight%3A250px%3Bposition%3Arelative%7D%23amznCharityBannerInner%20a%7Bdisplay%3Ablock%3Bwidth%3A100%25%3Bheight%3A100%25%3Bposition%3Arelative%3Bcolor%3A%23000%3Btext-decoration%3Anone%7D.text%7Bposition%3Aabsolute%3Btop%3A20px%3Bleft%3A15px%3Bright%3A15px%3Bbottom%3A100px%7D.support-wrapper%7Boverflow%3Ahidden%3Bmax-height%3A86px%7D.support%7Bfont-family%3AArial%2Csans%3Bfont-weight%3A700%3Bline-height%3A28px%3Bfont-size%3A25px%3Bcolor%3A%23333%3Btext-align%3Acenter%3Bmargin%3A0%3Bpadding%3A0%3Bbackground%3A0%200%7D.when-shop%7Bfont-family%3AArial%2Csans%3Bfont-size%3A15px%3Bfont-weight%3A400%3Bline-height%3A25px%3Bcolor%3A%23333%3Btext-align%3Acenter%3Bmargin%3A0%3Bpadding%3A0%3Bbackground%3A0%200%7D.donates%7Bfont-family%3AArial%2Csans%3Bfont-size%3A15px%3Bfont-weight%3A400%3Bline-height%3A21px%3Bcolor%3A%23333%3Btext-align%3Acenter%3Bmargin%3A0%3Bpadding%3A0%3Bbackground%3A0%200%7D%3C%2Fstyle%3E")); contents.document.close(); iFrame.style.display = 'block';}); document.getElementById('amznCharityBanner').appendChild(iFrame); })(); </script>
  </div>
  <div class="donate__contact">
    <h3 class="donate__contact--heading donate__contact--heavy">Contact Us</h3>
    <p>PublicNTP, Inc.</p>
    <p>1405 S Fern St #90372</p>
    <p>Arlington VA 22202-2810</p>
    <p>+1 (703) 651-2996</p>
    <p>
      <span class="donate__contact--bold">Tax ID:</span> 82-2301559
    </p>
  </div>
</div>
<script defer src="https://cdnjs.cloudflare.com/ajax/libs/cleave.js/1.0.9/cleave.min.js"></script>
<script defer src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/7.0.3/sweetalert2.all.min.js"></script>
<script defer src="https://cdnjs.cloudflare.com/ajax/libs/cleave.js/1.0.9/cleave.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/7.0.3/sweetalert2.min.css">
<script defer src="./js/donate.js"></script>
    </div>

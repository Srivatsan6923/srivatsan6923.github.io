---
layout: single
title: "DRISHTI: An On-Device Assistive Navigation System for the Visually Impaired"
author_profile: false
---

Hard Hack 2026 · Team of 4

---

<a href="/projects/" style="float: right; margin-bottom: 20px; font-weight: bold; text-decoration: none; color: var(--accent);">
  ⬅ Projects
</a>
<div style="clear: both;"></div>

<p style="text-align:center; margin-top:25px;">
  🏆 <span class="tl-badge">Winner, Best Healthcare Hack</span>
  &nbsp;
  <span class="tl-badge">Winner, MLH Best Use of ElevenLabs</span>
</p>

<p style="text-align:center; margin-top:10px;">
  🔗 <a href="https://github.com/Srivatsan6923/DRISHTI" target="_blank" rel="noopener"
  style="font-weight:bold; color:var(--accent); text-decoration:none;">GitHub Repo</a>
</p>


<section style="margin-top: 40px; line-height: 1.6;">

<h3 style="text-align: left; margin: 50px 0 20px; font-size: 36px; color: var(--accent);
font-weight: 600;">Overview</h3>

<p style="text-align: justify;">
    Assistive technology for blind and low-vision users is typically fragmented across separate devices for
    obstacle detection, text reading and safety monitoring, with little integration between them. Systems that
    do provide scene understanding generally depend on cloud inference, which requires continuous network
    connectivity and transmits camera imagery off the device. DRISHTI (Digital Reliable Intelligent Support for
    The visually Impaired) was developed as a single wearable system in which all perception runs locally on
    the user's own phone.
</p>

<p style="text-align: justify;">
    The system consists of a Raspberry Pi wearable belt and an Android application. The belt carries a camera
    and an ultrasonic proximity sensor, while the phone performs inference. A button press on the belt captures
    a frame and posts it to an HTTP server running inside the Android app, where an on-device vision-language
    model answers spoken questions about the scene. The same application monitors the phone's inertial sensors
    for falls and escalates to an emergency contact if the user does not respond. All input and output is
    through speech, so the system can be operated without looking at a screen.
</p>

<p style="text-align: justify;">
    DRISHTI was built by a team of four at <strong>Hard Hack 2026</strong>, where it won
    <strong>Best Healthcare Hack</strong> and the <strong>MLH Best Use of ElevenLabs</strong> award.
</p>

<!-- Optional: describe your own contribution here. Recruiters look for this on team projects.
     Uncomment and edit:
<p style="text-align: justify;">
    My work centred on <em>&lt;the parts you actually built&gt;</em>.
</p>
-->


<h3 style="text-align: left; margin: 50px 0 20px; font-size: 36px; color: var(--accent);
font-weight: 600;">System Architecture</h3>

<p style="text-align: justify;">
    The architecture places computation on the device the user already carries. The wearable is limited to a
    camera, a button, a distance sensor and a buzzer, while the phone runs the vision-language model, the face
    recognition network, the fall detector and the speech layer. This keeps the hardware inexpensive and
    replaceable, keeps inference local to the phone, and allows the system to degrade gracefully: if the belt
    is out of battery or out of range, the application falls back to the phone's own camera and sensors and
    continues to operate.
</p>

<div style="text-align: center; margin-top: 30px; margin-bottom: 30px;">
  <figure style="text-align:center;">
    <img src="/images/DRISHTI/system_architecture.png"
         alt="DRISHTI system architecture: Raspberry Pi wearable, Android app, on-device models and audio feedback loop"
         style="width:95%; border-radius:12px; margin-bottom:10px; box-shadow:0 4px 10px rgba(0,0,0,0.1); background:#fff;">
    <figcaption style="font-size:14px; margin-top:6px; color:var(--text-muted);">
      End-to-end system architecture: wearable capture, on-device inference, spoken response.
    </figcaption>
  </figure>
</div>

<p style="text-align: justify;">
    The Android application is organized into four layers. A Jetpack Compose presentation layer handles the
    interface, a service layer hosts the foreground fall-detection service and an embedded
    <strong>NanoHTTPD</strong> server, an inference layer runs the vision-language and face recognition models,
    and a data layer manages encrypted preferences, location and speech synthesis. Because the HTTP server runs
    inside the app, the phone acts as the server and the Raspberry Pi as the client, which removes the need for
    a hosted backend or a user account. The two devices only need to share a local network.
</p>


<h3 style="text-align: left; margin: 50px 0 20px; font-size: 36px; color: var(--accent);
font-weight: 600;">Core Capabilities</h3>

<h3 style="text-align: left; margin: 50px 0 20px; font-size: 28px; color: var(--accent);
font-weight: 600;">On-Device Vision Assistant</h3>

<p style="text-align: justify;">
    Scene understanding is performed by <strong>Google Gemma-3n E2B</strong>, a compact vision-language model
    executed locally through the Android AI Edge runtime with GPU delegate and NNAPI acceleration. The user
    presses the belt button and asks a question aloud, such as "what is in front of me?" or "read this label",
    and the model reasons jointly over the captured frame and the spoken query. Responses are streamed into the
    speech layer as they are generated, so audio playback begins before inference has completed.
</p>

<p style="text-align: justify;">
    Running the model locally removes per-query cost and network round-trip latency, and no captured image
    leaves the device. Spoken output is rendered using <strong>ElevenLabs</strong> neural text-to-speech. For a
    user whose entire interface is audio, the quality of that output directly affects how long the system
    remains comfortable to use.
</p>

<h3 style="text-align: left; margin: 50px 0 20px; font-size: 28px; color: var(--accent);
font-weight: 600;">Face Recognition via Function Calling</h3>

<p style="text-align: justify;">
    A general vision-language model can report that a person is present but cannot identify them. Rather than
    exposing a separate mode that the user has to select, DRISHTI provides the model with a tool. The system
    prompt instructs it to emit a <code>&lt;FUNC&gt;</code> tag when a query concerns identity. The application
    intercepts the tag, routes the frame into the recognition pipeline and merges the result back into the
    spoken response, so a question such as "who is in front of me?" invokes face recognition without any
    explicit mode switch.
</p>

<p style="text-align: justify;">
    The recognition pipeline uses <strong>ML Kit</strong> for face detection and an <strong>ArcFace</strong>
    model running under TensorFlow Lite to produce a 512-dimensional embedding for each detected face.
    Embeddings are matched by cosine similarity against a local database of registered faces. Recognition is
    therefore personalized to the people in the user's own life rather than to a fixed index, and the face
    database, like the models, remains on the phone.
</p>

<h3 style="text-align: left; margin: 50px 0 20px; font-size: 28px; color: var(--accent);
font-weight: 600;">Fall Detection and Emergency Escalation</h3>

<p style="text-align: justify;">
    Falls are a primary safety concern for the target users, and a simple accelerometer threshold produces
    frequent false positives from ordinary activity such as sitting down heavily or setting the phone on a
    table. DRISHTI instead looks for an ordered sequence across the accelerometer and gyroscope:
</p>

<ul style="margin-left: 20px; text-align: justify;">
  <li><strong>Free-fall</strong>, where total acceleration drops below <code>8.0 m/s²</code></li>
  <li><strong>Impact</strong>, a subsequent spike above <code>12.0 m/s²</code></li>
  <li><strong>Rotation</strong>, angular velocity exceeding <code>2.0 rad/s</code></li>
  <li><strong>Temporal validation</strong>, with the full sequence completing within <code>200–1000 ms</code></li>
</ul>

<p style="text-align: justify;">
    All four conditions must be satisfied for an event to register as a fall, which is what separates a genuine
    fall from ordinary handling of the device. When the pattern matches, a foreground service raises a
    full-screen alert with an audible alarm and a <strong>12-second countdown</strong>. If the user dismisses it,
    no further action is taken and a false positive costs twelve seconds. If the countdown expires, the
    application dials the configured emergency contact and sends an SMS containing the user's GPS coordinates.
    Escalation is the default behaviour, on the assumption that a user who has fallen may be conscious but
    unable to reach the phone.
</p>

<h3 style="text-align: left; margin: 50px 0 20px; font-size: 28px; color: var(--accent);
font-weight: 600;">Wearable Hardware</h3>

<p style="text-align: justify;">
    The belt is a Raspberry Pi with three peripherals connected over GPIO. A push button triggers an OpenCV
    frame capture that is posted to the phone's HTTP server, which places the camera on the body and pointed in
    the direction the user is facing rather than requiring them to aim a handheld phone at a scene they cannot
    see. An <strong>HC-SR04</strong> ultrasonic sensor runs an independent proximity loop and sounds a buzzer
    when an obstacle comes within <code>20 cm</code>. This loop is kept off the phone and outside the model path
    so that obstacle warnings are immediate and never queue behind an inference.
</p>


<h3 style="text-align: left; margin: 50px 0 20px; font-size: 36px; color: var(--accent);
font-weight: 600;">Designing for Eyes-Free Use</h3>

<p style="text-align: justify;">
    The main design constraint was that the primary user cannot see the interface, so every function has a
    non-visual equivalent. Capture is triggered by a physical button rather than an on-screen target, queries
    are spoken rather than typed, all output is synthesized speech, obstacle warnings are audible rather than
    visual, and the emergency countdown announces itself aloud and can be dismissed by touching anywhere on the
    screen. Compose components carry content descriptions for screen reader compatibility, and the interaction
    flow is designed for single-handed use. The Android interface shown below is used mainly for initial setup
    and by a sighted caregiver; routine operation does not require it.
</p>

<div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin-top: 30px; margin-bottom: 30px;">

  <figure style="width:30%; min-width:200px; text-align:center;">
    <img src="/images/DRISHTI/app_image_question.png"
         alt="Vision assistant answering a spoken question about a captured image"
         style="width:100%; border-radius:12px; box-shadow:0 4px 10px rgba(0,0,0,0.12);">
    <figcaption style="font-size:14px; margin-top:8px; color:var(--text-muted);">
      Vision assistant: on-device Gemma-3n answering a spoken query about the captured frame.
    </figcaption>
  </figure>

  <figure style="width:30%; min-width:200px; text-align:center;">
    <img src="/images/DRISHTI/app_fall_detection.png"
         alt="Fall detection monitoring screen"
         style="width:100%; border-radius:12px; box-shadow:0 4px 10px rgba(0,0,0,0.12);">
    <figcaption style="font-size:14px; margin-top:8px; color:var(--text-muted);">
      Fall detection running as a persistent foreground service.
    </figcaption>
  </figure>

  <figure style="width:30%; min-width:200px; text-align:center;">
    <img src="/images/DRISHTI/app_fall_alarm.png"
         alt="Fall alarm active with stop alarm control"
         style="width:100%; border-radius:12px; box-shadow:0 4px 10px rgba(0,0,0,0.12);">
    <figcaption style="font-size:14px; margin-top:8px; color:var(--text-muted);">
      Fall detected, with an audible alarm and countdown before the emergency contact is dialled.
    </figcaption>
  </figure>

</div>


<h3 style="text-align: left; margin: 50px 0 20px; font-size: 36px; color: var(--accent);
font-weight: 600;">Technology Stack</h3>

<p style="text-align: justify;">
    <strong style="color:var(--text);">Android</strong>
</p>
<div class="card__tags" style="margin: 0 0 22px;">
  <span class="card__tag">Kotlin</span>
  <span class="card__tag">Jetpack Compose</span>
  <span class="card__tag">Material Design 3</span>
  <span class="card__tag">Hilt</span>
  <span class="card__tag">Coroutines</span>
  <span class="card__tag">DataStore</span>
  <span class="card__tag">EncryptedSharedPreferences</span>
  <span class="card__tag">Foreground Services</span>
</div>

<p style="text-align: justify;">
    <strong style="color:var(--text);">On-device ML</strong>
</p>
<div class="card__tags" style="margin: 0 0 22px;">
  <span class="card__tag">Gemma-3n E2B</span>
  <span class="card__tag">Google AI Edge</span>
  <span class="card__tag">TensorFlow Lite</span>
  <span class="card__tag">ArcFace</span>
  <span class="card__tag">ML Kit Face Detection</span>
  <span class="card__tag">GPU Delegate / NNAPI</span>
</div>

<p style="text-align: justify;">
    <strong style="color:var(--text);">Hardware and I/O</strong>
</p>
<div class="card__tags" style="margin: 0 0 22px;">
  <span class="card__tag">Raspberry Pi</span>
  <span class="card__tag">Python 3</span>
  <span class="card__tag">OpenCV</span>
  <span class="card__tag">RPi.GPIO</span>
  <span class="card__tag">HC-SR04 Ultrasonic</span>
  <span class="card__tag">NanoHTTPD</span>
  <span class="card__tag">ElevenLabs TTS</span>
  <span class="card__tag">Location Services / SMS</span>
</div>


<h3 style="text-align: left; margin: 50px 0 20px; font-size: 36px; color: var(--accent);
font-weight: 600;">Future Work</h3>

<p style="text-align: justify;">
    Several components of the hackathon build remain deliberately simple. Face registration is currently
    pre-loaded rather than manageable at runtime, and recognition operates on individual frames rather than a
    live camera stream. The fall detector is rule-based; a learned model trained on recorded fall data would be
    expected to reduce both false alarms and missed events, and fusing a smartwatch inertial stream would
    provide a second measurement of the same event. Adding real-time object detection and OCR to the on-device
    model path would extend the system from answering questions on request towards continuous ambient awareness.
</p>


<h3 style="text-align: left; margin: 50px 0 20px; font-size: 36px; color: var(--accent);
font-weight: 600;">Team</h3>

<p style="text-align: justify;">
    Built at Hard Hack 2026 by
    <a href="https://github.com/Srivatsan6923" target="_blank" rel="noopener">Srivatsan Sarvesan</a>,
    <a href="https://github.com/FrozenWolf-Cyber" target="_blank" rel="noopener">Gokul Adethya</a>,
    <a href="https://github.com/indreshp135" target="_blank" rel="noopener">Indresh P</a> and
    <a href="https://github.com/rajeshgayathri2003" target="_blank" rel="noopener">Gayathri Rajesh</a>.
</p>

</section>

YOJANALINK - FIXED PROJECT PACKAGE
===================================

Clean filenames and repaired internal connections.

USER FLOW
index.html -> agree.html -> login.html -> info.html -> app.html

ADMIN FLOW
login-c.html / login-c-admin.html -> admin-c.html

FIXES IN THIS VERSION
- Repaired stale *-updated.html, *-c.html and renamed-file references.
- Notification and Settings panels now close correctly with their X buttons.
- Header Profile button now opens the Profile view.
- Header icons have explicit sizing/visibility rules.
- Login mobile number field now shows +91 by default; the user enters only the 10-digit Indian mobile number.
- JavaScript validation remains 10 digits, so +91 is not accidentally duplicated in stored phone values.
- Included all HTML, CSS, JS and logo files required by the frontend.
- Static local-reference and JavaScript syntax checks are included in the package build process.

NOTE
The supplied project still uses demo browser storage for authentication/data. Production role
and authentication checks should be enforced on the backend.

AADHAAR VERIFICATION
- info.html collects the non-sensitive profile fields only.
- aadhaar.html is the dedicated Aadhaar verification step.
- Frontend checks 12 digits and the Verhoeff checksum.
- Real Aadhaar existence/identity verification must be performed by your backend.
- To connect it later, set window.YOJANALINK_AADHAAR_VERIFY_URL or replace the empty endpoint in onboarding.js.
- Expected POST JSON: { "phone": "10-digit phone", "aadhaar": "12-digit Aadhaar" }
- Expected success response can contain {"valid":true}, {"verified":true}, or {"accepted":true}.

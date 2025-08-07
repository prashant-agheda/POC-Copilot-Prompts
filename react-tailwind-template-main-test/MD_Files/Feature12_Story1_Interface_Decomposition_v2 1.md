# Feature 12 - Story 1: Self-Service Merchant Application Interface Decomposition

## Overview
This document decomposes the interface aspects of the Self-Service Merchant Application story into smaller, INVEST-compliant user stories focused on UI/UX implementation.

## Interface User Stories

### Story I1: Onboarding Type Selection Interface
**As a** merchant,  
**I want to** see a clear selection between self-service and assisted boarding options on the initial screen,  
**So that** I can understand and choose my preferred onboarding method.

**Acceptance Criteria:**
```gherkin
Given I am on the merchant boarding landing page
When the page loads
Then I should see two clearly labeled options: "Self Boarding" and "Assisted Boarding"
And the "Self Boarding" option should be selected by default
And the "Assisted Boarding" option should be visually disabled
And each option should have descriptive icons
And the layout should follow the design system specifications

Given I am using a screen reader
When I navigate to the boarding options
Then I should hear clear descriptions of each option
And the current selection state should be announced
```

**Technical Details:**
- Layout: Cards with 8px rounded corners, 32px padding
- Colors: Selected state uses Light Blue (#E8F1FF)
- Typography: Inter font family, Semi-bold 20-24px for headers
- Icons: Mobile device for self-boarding, headset for assisted
- Accessibility: ARIA roles and labels for screen readers
- Responsive: Stack cards on tablet view

---

### Story I2: Business Information Form Section
**As a** merchant,  
**I want to** interact with a well-structured business information form,  
**So that** I can efficiently input my business details with clear validation feedback.

**Acceptance Criteria:**
```gherkin
Given I am on the business information section
When I view the form
Then I should see logically grouped fields in a two-column layout
And required fields should be clearly marked
And each field should have clear labels and placeholder text

Given I am entering business information
When I input invalid data
Then I should see immediate inline validation feedback
And error messages should be clearly visible in red (#DC2626)
And the submit button should remain disabled until all required fields are valid
```

**Field Specifications:**
- Business Name (Required, Text Input)
- Legal Business Name (Required, Text Input)
- Business Type (Required, Dropdown)
  - Options: LLC, Proprietorship, Partnership, Pvt Ltd
- PAN/TAN (Required, Text Input)
  - Validation: 10-character alphanumeric
- Owner's Date of Birth (Required, Date Picker)
  - Format: DD-MM-YYYY
- Email (Required, Text Input)
  - Validation: Valid email format
- Phone (Required, Text Input)
  - Validation: 10-digit mobile number

**Technical Details:**
- Layout: Responsive grid (2 columns desktop, 1 column tablet)
- Spacing: 16px between fields, 24px between sections
- Typography: Inter font, 14px for labels, 16px for input text
- Validation: Real-time client-side validation
- Accessibility: Clear focus states and error announcements

---

### Story I3: Location and Bank Information Interface
**As a** merchant,  
**I want to** input my location and banking details with automated assistance,  
**So that** I can provide accurate financial information efficiently.

**Acceptance Criteria:**
```gherkin
Given I am on the banking information section
When the geolocation prompt appears
Then I should see a clear permission request for location access
And a visual indicator of location detection status

Given I am entering bank details
When I start typing the bank name
Then I should see an autocomplete dropdown
And IFSC code validation should happen in real-time
And the form should provide immediate feedback on field validity
```

**Technical Details:**
- Geolocation: Browser location API integration
- Bank Autocomplete: Dropdown with search functionality
- IFSC Validation: Real-time format checking
- Status Indicators: Loading states for auto-fill operations
- Error Handling: Clear messaging for location/validation failures

---

### Story I4: Consent and Submission Interface
**As a** merchant,  
**I want to** review terms and submit my application with clear confirmation,  
**So that** I understand my commitments and receive confirmation of submission.

**Acceptance Criteria:**
```gherkin
Given I am on the consent section
When I view the terms and conditions
Then I should see clearly formatted consent text
And checkboxes for terms and data processing consent
And links to detailed terms should open in a modal/new tab

Given all required information is provided
When I submit the application
Then I should see a submission progress indicator
And receive a unique application reference number
And see a clear success message with next steps
```

**Technical Details:**
- Consent UI: Checkbox components with proper spacing
- Modal: Terms & conditions overlay with scroll
- Submit Button: Primary blue (#0042B1) with hover state
- Progress: Visual indicator during submission
- Queue Display: Format #MB-yyyyMMdd-#### after submission

---

### Story I5: Progress Persistence Interface
**As a** merchant,  
**I want to** save my progress and receive a return link,  
**So that** I can complete the application at my convenience.

**Acceptance Criteria:**
```gherkin
Given I am filling out the application
When I pause at any section
Then my progress should be automatically saved
And I should receive a unique URL to return

Given I return using the provided URL
When I authenticate
Then I should see my previously entered information
And be taken to the last active section
```

**Technical Details:**
- Auto-save: Progressive form state persistence
- URL Generation: Secure unique link creation
- State Management: Form data recovery logic
- Progress Indicator: Visual representation of completion
- Session Handling: Secure state restoration

---

## Implementation Notes

### Frontend Dependencies
- React/Next.js recommended for component structure
- Form Management: React Hook Form or Formik
- Validation: Yup schema validation
- UI Components: Custom themed Material-UI or Chakra UI
- Icon System: Feather icons or Heroicons

### Accessibility Requirements
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance
- Focus management
- Error announcement

### Responsive Design Breakpoints
- Desktop: > 1024px (2-column layout)
- Tablet: 768px - 1024px (Stack layout)
- Mobile: Not in current scope

### API Integration Points
- Form Submission: POST /api/merchant/onboarding
- Geolocation: Browser Location API
- Bank Validation: IFSC Code Verification API
- Progress Storage: Auto-save API endpoints

### Security Considerations
- HTTPS for all communications
- CSRF protection on forms
- Secure session management
- Data encryption in transit
- Input sanitization

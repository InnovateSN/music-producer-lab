# Music Producer Lab - Complete Content Audit Checklist

## Page Type: Landing Page (index.html)

### Header/Navigation
- [ ] Logo displays correctly
- [ ] "About" link works and goes to correct section/page
- [ ] "Lessons" link works
- [ ] "Pricing" link works
- [ ] "Login" button works (Clerk integration)
- [ ] "Sign Up" button works (Clerk integration)
- [ ] Navigation is responsive on mobile

### Hero Section
- [ ] Hero title displays
- [ ] Hero subtitle/description exists
- [ ] CTA button exists and works
- [ ] Hero image/visual element displays

### Features Section
- [ ] At least 3-6 feature cards present
- [ ] Each feature has icon/image
- [ ] Each feature has title and description
- [ ] Features accurately describe product

### Demo/Preview Section
- [ ] Interactive demo or video preview present
- [ ] Demo loads and works correctly
- [ ] CTA to try demo/sign up exists

### Pricing Section (if on landing)
- [ ] Pricing tiers displayed clearly
- [ ] Each tier has features list
- [ ] CTA buttons for each tier work
- [ ] Pricing is accurate (£29/month for schools)

### Footer
- [ ] Contact information present
- [ ] Links to About, Privacy Policy, Terms
- [ ] Social media links (if applicable)
- [ ] Copyright notice

---

## Page Type: Playground Pages (harmony-playground.html, drum-playground.html, free-drum-machine.html)

### Page Structure
- [ ] Page loads without errors
- [ ] Title and description present
- [ ] Instructions/tutorial visible

### Sequencer/Interactive Tool
- [ ] Sequencer loads correctly
- [ ] Piano roll / drum grid displays
- [ ] Clicking/tapping places notes
- [ ] Play button works
- [ ] Stop button works
- [ ] Clear/reset button works
- [ ] Tempo control works
- [ ] Key/scale selector works (for harmony)
- [ ] Instrument selector works

### Control Panel
- [ ] Tempo slider functional (60-200 BPM)
- [ ] Tempo display shows current BPM
- [ ] Key selector (C, D, E, F, G, A, B, C#, etc.) works
- [ ] Scale selector (Major, Minor, etc.) works
- [ ] Instrument selector functional

### Audio Playback
- [ ] Audio playback works correctly
- [ ] Notes sound at correct pitches
- [ ] Tempo changes are applied
- [ ] Audio stops when stop button clicked

### Additional Features
- [ ] Export to WAV/MIDI button (if enabled)
- [ ] Save pattern button (if logged in)
- [ ] Preset chord buttons (harmony playground)
- [ ] Sample selector (drum playground)

### Navigation
- [ ] Back to lessons/labs button exists
- [ ] Link works correctly

---

## Page Type: Interactive Lesson (with Sequencer)

### Hero Section
- [ ] Lesson number and category displayed (eyebrow)
- [ ] Lesson title exists
- [ ] Highlighted title portion exists
- [ ] Subtitle/description exists and is clear

### Exercise Instructions
- [ ] Exercise title present
- [ ] Description explains what to do
- [ ] Tip box with helpful guidance
- [ ] Step-by-step instructions (minimum 3-5 steps)
- [ ] Steps are clear and actionable

### Sequencer Section
- [ ] Sequencer type correct (drums/piano-roll)
- [ ] Sequencer loads and displays
- [ ] Grid is interactive
- [ ] Instrument labels correct
- [ ] Play/stop/clear buttons work

### Validation
- [ ] Validation rules exist in config
- [ ] Success message appears when correct
- [ ] Error message appears when incorrect
- [ ] Hint message guides user

### Completion Section
- [ ] Success message displays after validation passes
- [ ] Next lesson button appears
- [ ] Next lesson link is correct
- [ ] Previous lesson button exists
- [ ] Back to labs button exists

### Theory Content (Expandable)
- [ ] Theory section exists
- [ ] At least 2-3 subsections
- [ ] Content explains musical concepts
- [ ] Examples provided
- [ ] Content matches lesson topic

### Learning Objectives
- [ ] 3-5 learning objectives listed
- [ ] Objectives are specific and measurable
- [ ] Objectives match lesson content

### Navigation
- [ ] Previous lesson button works
- [ ] Next lesson button works
- [ ] Back to overview button works

---

## Page Type: Theory-Only Lesson (no sequencer)

### Hero Section
- [ ] Lesson number and category displayed
- [ ] Lesson title exists
- [ ] Subtitle/description exists

### Exercise/Practice Instructions
- [ ] Exercise title present
- [ ] Description explains concepts
- [ ] Tip box with guidance
- [ ] Step-by-step instructions or practice suggestions

### Theory Content
- [ ] Multiple theory sections (minimum 2)
- [ ] Each section has clear title
- [ ] Content is comprehensive (minimum 500 words total)
- [ ] Musical examples provided
- [ ] Chord progressions, scales, or techniques explained
- [ ] Common mistakes section
- [ ] Practice exercises section
- [ ] Pro tips included

### Mode Configuration
- [ ] `mode.sequencerType` set to 'none'
- [ ] `mode.sandbox` set to false
- [ ] Sequencer section hidden
- [ ] Completion section auto-visible

### Navigation
- [ ] Navigation buttons visible by default
- [ ] Next lesson button works
- [ ] Previous lesson button works
- [ ] Back to overview button works

### Learning Objectives
- [ ] 3-5 learning objectives listed
- [ ] Objectives match theory content

---

## Page Type: Labs/Overview Page (labs.html)

### Page Structure
- [ ] Page title and description
- [ ] Explanation of lesson structure

### Lesson Grid/List
- [ ] All lessons listed
- [ ] Lessons organized by category/module
- [ ] Each lesson card shows:
  - [ ] Lesson number
  - [ ] Lesson title
  - [ ] Category/module
  - [ ] Difficulty indicator (if applicable)
  - [ ] Completion status (if logged in)
- [ ] Clicking lesson card opens lesson

### Progress Tracking (if logged in)
- [ ] Progress bar or percentage shown
- [ ] Completed lessons marked
- [ ] In-progress lessons indicated

### Navigation
- [ ] Filter by category/module works
- [ ] Search functionality (if exists)
- [ ] Back to home button

---

## Page Type: Teacher Dashboard (teacher/page.tsx)

### Layout
- [ ] Page loads for users with teacher role
- [ ] Unauthorized users redirected

### Class Management Section
- [ ] "My Classes" section displays
- [ ] List of teacher's classes shown
- [ ] Each class card shows:
  - [ ] Class name
  - [ ] Number of students
  - [ ] Class code
  - [ ] Creation date
- [ ] "Create New Class" button exists
- [ ] "Create New Class" button links to /teacher/create-class

### Class Actions
- [ ] View class details button/link
- [ ] Edit class button/link
- [ ] Archive class button (with confirmation)

### Student Overview
- [ ] Summary of total students across all classes
- [ ] Recent student activity

### Navigation
- [ ] Link to student progress reports
- [ ] Link to assignments (if implemented)
- [ ] Back to dashboard/home

---

## Page Type: Student Dashboard (student/page.tsx)

### Layout
- [ ] Page loads for logged-in students
- [ ] Personalized welcome message

### Progress Overview
- [ ] Overall completion percentage
- [ ] Number of lessons completed
- [ ] Current streak (if applicable)
- [ ] Achievements/badges (if implemented)

### Continue Learning Section
- [ ] "Continue where you left off" button
- [ ] Last accessed lesson highlighted
- [ ] Next recommended lesson suggested

### My Classes Section
- [ ] List of enrolled classes
- [ ] Class name and teacher shown
- [ ] Link to class page

### Saved Patterns Section
- [ ] List of saved drum patterns/melodies
- [ ] Load pattern button for each
- [ ] Delete pattern button

### Certificates Section
- [ ] Earned certificates displayed
- [ ] Download/view certificate button

---

## Page Type: Create Class (teacher/create-class/page.tsx)

### Form Fields
- [ ] Class name input
- [ ] Class description textarea
- [ ] Max students selector
- [ ] Academic year selector
- [ ] Submit button

### Form Validation
- [ ] Required fields marked
- [ ] Client-side validation works
- [ ] Error messages display for invalid input

### Form Submission
- [ ] API endpoint exists (/api/classes)
- [ ] Class created successfully
- [ ] Class code generated
- [ ] User redirected to class page or dashboard
- [ ] Success message shown

### Navigation
- [ ] Cancel button returns to dashboard
- [ ] Back button works

---

## Page Type: Static Pages (About, Contact, Privacy, Terms)

### About Page
- [ ] Company/product description
- [ ] Mission statement
- [ ] Team information (if applicable)
- [ ] Contact CTA

### Contact Page
- [ ] Contact form exists
- [ ] Email address shown
- [ ] Social media links
- [ ] Form submission works

### Privacy Policy
- [ ] Complete privacy policy text
- [ ] GDPR compliance statements
- [ ] Data collection disclosure
- [ ] User rights explained

### Terms of Service
- [ ] Complete terms text
- [ ] Subscription terms
- [ ] Cancellation policy
- [ ] Liability disclaimers

---

## Common Elements (ALL Pages)

### Technical
- [ ] No console errors
- [ ] Page loads in under 3 seconds
- [ ] Responsive on mobile/tablet/desktop
- [ ] All images load correctly
- [ ] All external scripts load (Clerk, analytics, etc.)

### SEO/Meta
- [ ] Page title exists and is descriptive
- [ ] Meta description exists
- [ ] Favicon loads

### Authentication (Protected Pages)
- [ ] Clerk authentication works
- [ ] Unauthorized access redirected
- [ ] User role checked correctly

### Database Integration (Where Applicable)
- [ ] API endpoints exist and work
- [ ] Data saves correctly
- [ ] Data loads correctly
- [ ] Error handling for failed requests

---

## Lesson Content Quality Standards

### Theory Content
- [ ] Minimum 500 words per theory section
- [ ] Clear explanations of concepts
- [ ] Musical examples with notation or chord names
- [ ] Practical applications explained
- [ ] Common mistakes addressed
- [ ] Practice exercises provided

### Exercise Instructions
- [ ] Clear objective stated
- [ ] Step-by-step guidance (minimum 3 steps)
- [ ] Tips for success
- [ ] Expected outcome described

### Validation Rules
- [ ] Validation type specified
- [ ] Required notes/chords defined
- [ ] Tolerance levels appropriate
- [ ] Success criteria clear

### Messages
- [ ] Initial message guides user
- [ ] Success message is encouraging
- [ ] Error message is helpful, not discouraging
- [ ] Messages are grammatically correct

---

## File Structure Requirements

### Lesson Config Files
- [ ] File naming: `lesson-[category]-[number].config.js`
- [ ] lessonKey format: `mpl-[category]-[number]-progress`
- [ ] lessonNumber matches file name
- [ ] lessonCategory accurate
- [ ] nextLessonUrl correct
- [ ] prevLessonUrl correct
- [ ] hero object complete
- [ ] exercise or theory object exists
- [ ] learningObjectives array (3-5 items)
- [ ] mode object exists
- [ ] sequencerType correct ('drums', 'piano-roll', 'none')

### HTML Files
- [ ] DOCTYPE and HTML structure correct
- [ ] Correct meta tags
- [ ] Stylesheet links correct
- [ ] Script imports in correct order
- [ ] Module imports use correct paths
- [ ] IDs match what JavaScript expects

---

## Audio Production Module Lessons (TO BE CREATED)

### Missing Lessons
- [ ] lesson-arrangement.html + config
- [ ] lesson-mastering.html + config
- [ ] lesson-mixing.html + config
- [ ] lesson-sound-design.html + config
- [ ] lesson-vocals.html + config

### Each Missing Lesson Must Have
- [ ] Complete theory content (1000+ words)
- [ ] Multiple theory sections
- [ ] Practical exercises or listening examples
- [ ] Step-by-step guidance
- [ ] Learning objectives
- [ ] Navigation buttons
- [ ] Proper mode configuration

# Lytics Admin

We'd like to create a demo of some alternative ways to manage customers' various Lytics instances -- settings, users, keys, etc. -- from within the Contentstack application.

Use the @apps/demo application as a reference architecture for our new demo.

The Contentstack application allows customers to manage multiple products, each with multiple projects/instances.

When a user clicks on a legacy product (like Personalize), they see a list view for all of their projects as "card" (with an additional button at the top for creating a new project).  When a card is clicked, the user can then create/manage product metadata.

We acquired a company called Lytics, and the Contentstack app should have similar functionality for managing Lytics projects (often called "Lytics accounts").  There should be cards for various Lytics projects, with a "Create New Lytics Project" button.  The things you should be able to manage should be:
- Audiences (which would include a mini version of the segment builder from the Lytics standalone application, but we can just include a placeholder for now)
- Settings
    -  General
        - Name
        - Description
        - Id
        - Delete Project
    - Users
        - Invite user button
            - Email Address
            - Roles ["owner", "admin", "viewer"]
        - User List (Table, include email, role, date invited, last login)
    - Keys
        - View API Keys
        - Create Access Tokens

Ask any clarifying questions you need to provide a high-fidelity prototype of the new Lytics administration.
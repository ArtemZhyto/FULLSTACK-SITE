project-root/          # Main root
|
|-- client/                    # Frontend (Client Side)
|   |-- public/               # Static files like HTML, images, fonts
|   |-- src/                  # Source code of the client side
|       |-- app/   
|       |-- pages/       
|       |-- entities/         # Client services like API clients
|       |-- features/         # Components representing individual pages
|       |-- shared/           # Main application component
|       |-- index.js          # Entry point for the client-side application
|   |
|   |-- package.json          # Dependencies and scripts for the client side
|   |-- .gitignore            # File specifying ignored files in Git
|   |-- README.md             # Documentation for the client side

|
|-- server/            # Server part (Backend)
|   |-- venv/          # Dependencies container
|   |-- api/           # Main app with all api logic
|   |-- base/          # Project with all configurations
|   |-- quickbuyer/    # App with all models that are used ( User, Product )
|   |
|   |-- Pipfile.lock   # Dependencies versions
|   |-- .gitignore     # File specifying ignored files in Git
|   |-- Pipfile        # All dependencies info
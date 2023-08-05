USED HOOKS + custom hook = useMode  
USED CONTEXT

# PACKAGES USED

- used material ui
  - for data grid
  - for icons
  - CssBaseline: PREBUILD CSS PROVIDER
  - themeProvider: allow to pass theme in MUI
  - Box: LIKE DIVE IN CSS
    , IconButtom, useTheme
- react router
  - Browser Router
- react pro side bar
  - easy in making side bar
- formik

  - for making form

- yup
  - for validation

# VS CODE EXTENSIONS USED

- PRETTIER
- TAILWIND SHADES

# File Folder Architecture:

- To avoid complication of navigating, in finding complicated code in nested complex file folder structure
- APPROACH USED: **DUCKS PATTERN:**
  - Organising code based on features
  - Organise based on pages, not its nested component
  - NESTED AS WELL AS FLAT
- COMPONENTS FOLDER:
  - COMPONENTS USED AT MULTIPLE LOCATION
- SCENES FOLDER:

  - BASED ON WEB PAGES OF PRJ
  - SUB FOLDER ARE NON REPEATING, ROUTES OF PRJ

  - GLOBAL FOLDER

# NOT INSTALLED PACKAGES

- Full calendar
- nivo

# PACKAGES INSTALLATION

'''
npx create-react-app react-admin
cd react-admin
code .
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/x-data-grid @mui/icons-material
npm install react-router-dom@6 react-pro-sidebar formik yup

'''

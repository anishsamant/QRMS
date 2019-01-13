# QRMS
College Automation System

## Steps to setup
```
git clone https://github.com/anishsamant/QRMS
cd QRMS
```

### Frontend
```
cd frontend/gui
npm install
npm start
```

### Backend
```
cd backend
```
  <b>Create a virtualenv</b><br />
  <b>1) For Windows</b>
```
virtualenv env
.\env\Scripts\activate
```
  <b>2) For Linux</b>
```
virtualenv env
source env/bin/activate
```
  <b>Follow the steps inside virtualenv</b>
```
pip install -r requirements.txt
cd src
python manage.py runserver  
```

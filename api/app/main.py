from fastapi import FastAPI

app = FastAPI()

@app.get('/api/healthchecker')
def root():
    return {'message': 'Server is healthy.'}
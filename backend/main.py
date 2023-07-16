from fastapi import Request,FastAPI,Form,File,UploadFile
import schemas
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

app=FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins="*",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# 
@app.post("/register")
async def addUser(firstname:str=Form(...),lastname:str=Form(...),email:str=Form(...),password:str=Form(...),image:UploadFile=File(...)):
    print(image,"sdhdkjgkdg",firstname)
    return {"status":0,"msg":"User added"}





if __name__=="__main__":
    uvicorn.run(app,port=5000)
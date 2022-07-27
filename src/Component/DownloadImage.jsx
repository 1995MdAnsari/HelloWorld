import React, { useState } from 'react'
import './addImage.css';
const DownloadImage = () => {






    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);
    
  
    const handleImageUpload = e => {
      const [file] = e.target.files;
      if (file) {
        const reader = new FileReader();
        const { current } = uploadedImage;
        current.file = file;
        reader.onload = e => {
          current.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    };








    const [file, setFile] = useState();
    const handleChange = (e) => {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    const download = e => {
        console.log(e.target.href);
        fetch(e.target.href, {
            method: "GET",
            headers: {}
        })
            .then(response => {
                response.arrayBuffer().then(function (buffer) {
                    const url = window.URL.createObjectURL(new Blob([buffer]));
                    const link = document.createElement("a");
                    link.href = url;
                    link.setAttribute("download", "image.png"); //or any other extension
                    document.body.appendChild(link);
                    link.click();
                });
            })
            .catch(err => {
                console.log(err);
            });
    };
    return (
        <>
            <div className="App">
                <a
                    href="https://upload.wikimedia.org/wikipedia/en/6/6b/Hello_Web_Series_%28Wordmark%29_Logo.png"
                    download
                    onClick={e => download(e)}
                >
                    <i className="fa fa-download" />
                    download Image
                </a>

                <h2>Add Image:</h2>
                <input type="file"
                    accept='image/*' onChange={handleChange} />
                <img src={file} 
                style={{
                height: "60px",
                width: "60px",}}
                />
            </div>



            <h3> Using React Hook "useRef"</h3>



            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            > 
            
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    ref={imageUploader}
                    style={{
                        display: "none"
                    }}
                />
                <div
                    style={{
                        display:'flex',
                        flexDirection:'colunm',
                        justifyContent:'center',
                        alignItems:'center',
                        fontSize:'70px',
                        height: "60px",
                        width: "60px",
                        border:"1px solid red"
                    }}
                    onClick={() => imageUploader.current.click()}
                >  
                    { file === "" ? 
                    <h2>Hii</h2>
                    :
                    <img
                        ref={uploadedImage}
                        style={{
                            height: "60px",
                            width: "60px",
                        }}  
                    />
                    }
                </div>
                Click to upload Image
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    ref={imageUploader}
                    style={{
                        display: "none"
                    }}
                />
                <div
                    style={{
                        height: "60px",
                        width: "60px",
                        // border: "1px solid black"
                    }}
                    onClick={() => imageUploader.current.click()}
                > 
                    
                    <img
                        ref={uploadedImage}
                        style={{
                            height: "60px",
                            width: "60px",
                        }}  
                    />
                   
                </div>
                Click to upload Image
            </div>
        </>

    );
}

export default DownloadImage;

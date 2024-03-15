"use client"
import DropzoneComponents from 'react-dropzone'

function Dropzone() {
const maxsize=20971520



  return (
    <DropzoneComponents minSize={0} maxSize={maxsize} onDrop={acceptedFiles => console.log(acceptedFiles)}>
    {({getRootProps, getInputProps, isDragActive,isDragReject,fileRejections}) => 
    
    {

      const isFileTooLarge=fileRejections.length>0 && fileRejections[0].file.size>maxsize;
      return(
    <section>
      <div {...getRootProps()}>
       <input {...getInputProps()}/> 
        {!isDragActive && "Click here or  drop a file to upload "}
        {isDragActive && !isDragReject && "Drop to upload this File!"}
        {isDragReject && "File type not accepted"}
        {isFileTooLarge && (
          <div className='text-danger mt-2 '>
            File is too Large 
          </div>
        )}

      </div>
    </section>
  )}}
</DropzoneComponents>
  )
}

export default Dropzone

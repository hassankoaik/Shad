"use client"
import DropzoneComponents from 'react-dropzone'

function Dropzone() {
  return (
    <DropzoneComponents onDrop={acceptedFiles => console.log(acceptedFiles)}>
    {({getRootProps, getInputProps}) => (
    <section>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
    </section>
  )}
</DropzoneComponents>
  )
}

export default Dropzone

import {useState, useEffect} from 'react';
import {useDropzone} from 'react-dropzone';

function useImages(initialValue) {
  const [images, setImages] = useState(initialValue);

  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/jpeg, image/png',
    maxFiles: 6,
    onDrop: (acceptedFiles) => {
      setImages([...images, ...acceptedFiles.map((image) => Object.assign(image, {
        preview: URL.createObjectURL(image),
      }))]);
    },
  });

  useEffect(() => () => {
    images.forEach(image => URL.revokeObjectURL(image.preview));
  }, [images]);

  return [images, getRootProps, getInputProps];
}

export default useImages;

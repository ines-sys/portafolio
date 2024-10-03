import Image from "next/image"
import { IFrameImageProps } from './types';
import { clsx } from 'clsx';

const DEFAULT_CLASSES = "";
const DEFAULT_IMAGE_WIDTH = 100;
const DEFAULT_IMAGE_HEIGHT = 100;

const FrameImage = ({...props}: IFrameImageProps ) => {
  const classNames = clsx(DEFAULT_CLASSES, props.className);

  return (
    <Image
      src={props.src}
      alt={props.alt}
      className={classNames}
      width={props.width || DEFAULT_IMAGE_WIDTH}
      height={props.height || DEFAULT_IMAGE_HEIGHT}
    />
  )
}

export default FrameImage;
import { Carousel, Image } from 'grommet';

type ImageCarouselProps = {
    images: any[],
    play?: number,
    shuffled?: boolean 
};

export function ImageCarousel({images, play, shuffled}: ImageCarouselProps){
    if(play === undefined){
        play = 3000;
    }
    if(shuffled === undefined){
        shuffled = true;
    }
    images = images.map((image, i) => {
        return (
            <Image key={i} src={image} fit='contain'/>
        );
    });

    const shuffle = (array: any[]): any[] => {
        let currentIndex = array.length,  randomIndex;
    
        while (currentIndex !== 0) {
      
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        return array;
    };

    const displayImages = shuffled ? shuffle(images) : images;

    return (
        <Carousel wrap margin='medium' play={play} controls={false}>
            {displayImages}
        </Carousel>
    );

}
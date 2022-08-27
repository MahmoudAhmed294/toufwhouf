import React from 'react';
import Slider from 'react-slick';

import Sliderbg1 from '@/assets/images/sliderbg1.jpg';
import Sliderbg2 from '@/assets/images/sliderbg2.jpg';
import Sliderbg3 from '@/assets/images/bgAuth.jpg';
import { Box, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function Carousel() {
  const { t } = useTranslation();

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    LazyLoadTypes: 'progressively',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: function (i: any) {
      return <div className="dot"></div>;
    },
    dotsClass: 'slick-dots slick-thumb',
  };

  const imagesStyle = {
    height: '79vh',
    width: '100%',
    backgroundPosition: 'top',
    position: 'relative',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  const ImagesArr=[Sliderbg1, Sliderbg2 , Sliderbg3]
  return (
    <Box>
      <Slider {...settings}>
        {
          ImagesArr.map((image ,index) =>(
            <Box
            key={index}
            sx={{
              ...imagesStyle,
              backgroundImage: `url(${image.src})`,
              color: 'body.light',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                backgroundColor: 'body.main',
                opacity: 0.3,
                left: 0,
                bottom: 0,
                right: 0,
                zIndex: 2,
              }}
            />
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="start"
              sx={{ height: '100%', position: 'relative', zIndex: 5, mt:"100px" }}
            >
              <Typography variant="h1">{t('We are ready to travel')}</Typography>
              <Typography variant="h3">
                {t('We are ready to serve you')}
              </Typography>
            </Stack>
          </Box>
  
          ))
            }
      </Slider>

    </Box>
  );
}

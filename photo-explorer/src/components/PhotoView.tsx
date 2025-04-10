import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { api } from '../services/api';
import logger from '../services/logger';
import Spinner from './Spinner';
import { Photo } from '../types';

function PhotoView() {
  const { photoId } = useParams<{ photoId: string }>();
  const [photo, setPhoto] = useState<Photo | null>(null);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadPhoto = async () => {
      if (!photoId) return;
      try {
        const photoData = await api.fetchPhoto(photoId);
        setPhoto(photoData);
        setTitle(photoData.title);
        setLoading(false);
      } catch (error) {
        logger.error('Failed to load photo:', error);
        setLoading(false);
      }
    };
    loadPhoto();
  }, [photoId]);

  const saveTitle = async () => {
    if (!photoId || !photo) return;
    try {
      const updatedPhoto = await api.updatePhoto(photoId, { title });
      setPhoto(updatedPhoto);
      alert('Title saved! (Simulated for demo)');
    } catch (error) {
      logger.error('Failed to update photo title:', error);
      alert('Oops, something went wrong!');
    }
  };

  if (loading) return <Spinner />;

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant='h5' gutterBottom>
        Photo
      </Typography>
      <Box
        component='img'
        src={photo?.thumbnailUrl}
        alt={photo?.title}
        sx={{ mb: 2, borderRadius: 1 }}
      />
      <TextField
        label='Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <Button variant='contained' onClick={saveTitle} sx={{ mr: 2 }}>
        Save
      </Button>
      <Button
        variant='outlined'
        onClick={() => navigate(`/album/${photo?.albumId}`)}
      >
        Back to Album
      </Button>
    </Container>
  );
}

export default PhotoView;

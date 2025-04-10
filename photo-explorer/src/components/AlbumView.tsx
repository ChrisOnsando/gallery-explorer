import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from '@mui/material';
import { api } from '../services/api';
import Spinner from './Spinner';
import { Album, Photo } from '../types';

function AlbumView() {
  const { albumId } = useParams<{ albumId: string }>();
  const [album, setAlbum] = useState<Album | null>(null);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadAlbum = async () => {
      if (!albumId) return;
      try {
        const [albumData, photoData] = await Promise.all([
          api.fetchAlbum(albumId),
          api.fetchPhotos(albumId),
        ]);
        setAlbum(albumData);
        setPhotos(photoData);
        setLoading(false);
      } catch (error) {
        console.error('Failed to load album data:', error);
        setLoading(false);
      }
    };
    loadAlbum();
  }, [albumId]);

  if (loading) return <Spinner />;

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant='h5' gutterBottom>
        Album: {album?.title}
      </Typography>
      <Typography variant='h6'>Photos</Typography>
      <List>
        {photos.map((photo) => (
          <ListItem
            key={photo.id}
            component='button'
            onClick={() => navigate(`/photo/${photo.id}`)}
          >
            <ListItemText primary={photo.title} />
          </ListItem>
        ))}
      </List>
      <Button
        variant='outlined'
        onClick={() => navigate(`/user/${album?.userId}`)}
      >
        Back to User
      </Button>
    </Container>
  );
}

export default AlbumView;

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
import logger from '../services/logger';
import Spinner from './Spinner';
import { User, Album } from '../types';

function UserProfile() {
  const { userId } = useParams<{ userId: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (!userId) return;
      try {
        const [userData, albumData] = await Promise.all([
          api.fetchUser(userId),
          api.fetchUserAlbums(userId),
        ]);
        setUser(userData);
        setAlbums(albumData);
        setLoading(false);
      } catch (error) {
        logger.error('Failed to fetch user profile:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, [userId]);

  if (loading) return <Spinner />;

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant='h5' gutterBottom>
        {user?.name}
      </Typography>
      <Typography variant='body1'>Email: {user?.email}</Typography>
      <Typography variant='body1' sx={{ mb: 2 }}>
        Phone: {user?.phone}
      </Typography>
      <Typography variant='h6'>Albums</Typography>
      <List>
        {albums.map((album) => (
          <ListItem
            key={album.id}
            component='button'
            onClick={() => navigate(`/album/${album.id}`)}
          >
            <ListItemText primary={album.title} />
          </ListItem>
        ))}
      </List>
      <Button variant='outlined' onClick={() => navigate('/users')}>
        Back to Users
      </Button>
    </Container>
  );
}

export default UserProfile;

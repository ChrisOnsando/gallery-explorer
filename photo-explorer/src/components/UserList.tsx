import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Box,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import { useAuth } from '../services/auth';
import logger from '../services/logger';
import Spinner from './Spinner';
import { User, Album } from '../types';

function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    const loadData = async () => {
      try {
        const [userData, albumData] = await Promise.all([
          api.fetchUsers(),
          api.fetchAlbums(),
        ]);
        setUsers(userData);
        setAlbums(albumData);
        setLoading(false);
      } catch (error) {
        logger.error('Failed to load users and albums:', error);
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) return <Spinner />;

  return (
    <Container sx={{ mt: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant='h5'>All Users</Typography>
        <Button variant='outlined' onClick={logout}>
          Logout
        </Button>
      </Box>
      <List>
        {users.map((user) => {
          const userAlbumCount = albums.filter(
            (album) => album.userId === user.id,
          ).length;
          return (
            <ListItem
              key={user.id}
              component='button'
              onClick={() => navigate(`/user/${user.id}`)}
            >
              <ListItemText
                primary={user.name}
                secondary={`Albums: ${userAlbumCount}`}
              />
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
}

export default UserList;

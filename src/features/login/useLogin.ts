import { useState, useEffect } from 'react';
import axios from 'axios';

export function useLogin() {
  const [users, setUsers] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('/users.json')
      .then(res => {
        setUsers(res.data.users);
        setError(null);
      })
      .catch(() => setError('Error cargando usuarios'));
  }, []);

  return { users, error };
}

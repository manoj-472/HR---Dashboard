export async function fetchUsers(page = 1) {
    try {
      const res = await fetch(`https://dummyjson.com/users?limit=20&skip=${(page - 1) * 20}`, {
        cache: 'no-store',
      });
      if (!res.ok) throw new Error('Failed to fetch users');
      const data = await res.json();
      return data.users.map((user) => ({
        ...user,
        department: ['HR', 'Engineering', 'Sales'][Math.floor(Math.random() * 3)],
        rating: Math.floor(Math.random() * 5) + 1,
        address: `${user.address.address}, ${user.address.city}`,
        phone: user.phone || 'N/A',
        bio: 'Lorem ipsum dolor sit amet.',
      }));
    } catch (error) {
      console.error('fetchUsers error:', error);
      throw new Error('Unable to fetch users. Please try again later.');
    }
  }
  
  export async function fetchUserById(id) {
    try {
      const res = await fetch(`https://dummyjson.com/users/${id}`, { cache: 'no-store' });
      if (!res.ok) throw new Error('Failed to fetch user');
      const user = await res.json();
      return {
        ...user,
        department: ['HR', 'Engineering', 'Sales'][Math.floor(Math.random() * 3)],
        rating: Math.floor(Math.random() * 5) + 1,
        address: `${user.address.address}, ${user.address.city}`,
        phone: user.phone || 'N/A',
        bio: 'Lorem ipsum dolor sit amet.',
      };
    } catch (error) {
      console.error('fetchUserById error:', error);
      throw new Error('Unable to fetch user details.');
    }
  }
  
  export async function fetchUsersByIds(ids) {
    try {
      const users = await Promise.all(ids.map((id) => fetchUserById(id)));
      return users;
    } catch (error) {
      console.error('fetchUsersByIds error:', error);
      throw new Error('Unable to fetch bookmarked users.');
    }
  }
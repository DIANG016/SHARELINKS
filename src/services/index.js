export const getAllLinksServices = async (token) => {
    const response = await fetch(`${process.env.REACT_APP_API}`, {
      headers: {
        Authorization: token
      }
    });
    const json = await response.json();

    if (!response.ok) {
      throw new Error(json.message);
    }
  
    return json.data;

}

export const getSingleLinkService = async ({id, token}) => {
  const response = await fetch(`${process.env.REACT_APP_API}/enlace/${id}`, {
    headers: {
      Authorization: token
    }
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const registerUserService = async ({ nombre, email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_API}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, email, password }),
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const logInUserService = async ({ email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_API}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const getMyDataService = async ({token}) => {
  const response = await fetch(`${process.env.REACT_APP_API}/user`, {
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const sendLiknService = async ({ data, token }) => {
  const response = await fetch(`${process.env.REACT_APP_API}`, {
    method: "POST",
    body: data,
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};


export const deleteLinkService = async ({ id, token }) => {
  const response = await fetch(`${process.env.REACT_APP_API}/enlace/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const getUserDataService = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_API}/user/${id}`);
  

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const getUserLinksService = async ({id, token}) => {
  const response = await fetch(
    `${process.env.REACT_APP_API}/user/${id}/enlaces`, {
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};


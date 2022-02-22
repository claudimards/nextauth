type User = {
  permissions: string[];
  roles: string[];
}

type validateUserPermissionsParams = {
  user: User | undefined;
  permissions?: string[];
  roles?: string[];
}

export function validateUserPermissions({ user, permissions, roles } :validateUserPermissionsParams) {
  if (permissions?.length && permissions.length > 0) {
    const hasAllPermissions = permissions?.every(permission => {
      return user?.permissions.includes(permission)
    })

    return hasAllPermissions
  }

  if (roles?.length && roles.length > 0) {
    const hasAllRoles = roles.some(role => {
      return user?.roles.includes(role)
    })

    return hasAllRoles
  }
}
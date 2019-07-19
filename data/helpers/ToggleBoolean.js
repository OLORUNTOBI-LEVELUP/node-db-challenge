module.exports = {
  intToBoolean,
  booleanToint,
  projectToBody,
  actionToBody
};

function intToBoolean(int) {
  if (int === 1) {
    return true;
  } else {
    return false;
  }
}

function booleanToint(bool) {
  if (bool === true) {
    return 1;
  } else {
    return 0;
  }
}

function projectToBody(project) {
  const result = {
    ...project,
    completed: intToBoolean(project.completed)
  };

  if (project.actions) {
    result.actions = project.actions.map(action => ({
      ...action,
      completed: intToBoolean(action.completed)
    }));
  }

  return result;
}

function actionToBody(action) {
  return {
    ...action,
    completed: intToBoolean(action.completed)
  };
}

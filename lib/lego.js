const runTask = require('./utils/runTask');

module.exports = async function(args) {
  const [task] = args;
  try {
    if (task) {
      runTask(task);
    } else {
      const taskList = [
        'cleanBuild',
        'copyCNAME'
      ];

      for (const task of taskList) {
        await runTask(task);
      }
    }
  } catch (error) {
    process.exit(1);
  }
}
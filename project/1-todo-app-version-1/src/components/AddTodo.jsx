function todoApp() {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-6">
          <input type="text" placeholder="Enter a new todo..." />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn-solid theme-success">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default todoApp;

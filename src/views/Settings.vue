<template>
  <div>
    <h1>Settings</h1>
    <form>
      <label for="theme-select">Theme:</label>
      <select id="theme-select" data-testid="theme-select">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>

      <label for="notifications">
        <input id="notifications" data-testid="notifications-checkbox" type="checkbox" />
        Enable Notifications
      </label>

      <button type="submit" role="button" data-testid="save-settings">Save Settings</button>

      <button type="button" data-testid="disabled-button" disabled>Disabled Action</button>
    </form>
  </div>
</template> 
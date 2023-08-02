# frontloop-challenge-pops
The easy task is taken from https://frontloops.io/. Made using HTML, CSS(SASS), and plain Js.

1. **Adding PopItems**:
   - Users can add a new PopItem by typing a time (in seconds) in the input field and clicking the "Add PopItem" button or pressing Enter.
   - The PopItem is added to the list with a unique ID.

2. **Countdown Timer**:
   - Each PopItem has a countdown timer that decrements by 1 second.
   - The remaining time (in seconds) is displayed inside the PopItem.
   - The countdown continues until the specified time is reached.

3. **PopItem Removal**:
   - When the countdown timer of a PopItem reaches 0, the PopItem is automatically removed from the list.
   - The corresponding setInterval is cleared to stop the countdown.

## How to Use

1. Clone the repository to your local machine.
2. Open the `index.html` file in your web browser.
3. Type a time (in seconds) in the input field and click the "Add PopItem" button or press Enter.
4. The PopItem will be added to the list, and the countdown timer will start.
5. Once the countdown timer reaches 0, the PopItem will be removed from the list.

Feel free to explore and use the application to set countdown timers for various PopItems!

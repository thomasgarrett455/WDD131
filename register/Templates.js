function totalFees() {
  const feeElements = document.querySelectorAll("[id^=fee]");
  const feeArray = [...feeElements];
  const total = feeArray.reduce((sum, inputElement) => {
    return sum + (parseFloat(inputElement.value) || 0);
  }, 0);
  return total;
}

export function participantTemplate(count) {
  return `
    <section class="participant" id="participant-${count}">
      <p>Participant ${count}</p>
      <div class="item">
        <label for="fname-${count}">First Name<span>*</span></label>
        <input id="fname-${count}" type="text" name="fname-${count}" required />
      </div>
      <div class="item activities">
        <label for="activity-${count}">Activity #<span>*</span></label>
        <input id="activity-${count}" type="text" name="activity-${count}" />
      </div>
      <div class="item">
        <label for="fee-${count}">Fee ($)<span>*</span></label>
        <input id="fee-${count}" type="number" name="fee-${count}" />
      </div>
      <div class="item">
        <label for="date-${count}">Desired Date <span>*</span></label>
        <input id="date-${count}" type="date" name="date-${count}" />
      </div>
      <div class="item">
        <p>Grade</p>
        <select id="grade-${count}" name="grade-${count}">
          <option selected value="" disabled></option>
          <option value="1">1st</option>
          <option value="2">2nd</option>
          <option value="3">3rd</option>
          <option value="4">4th</option>
          <option value="5">5th</option>
          <option value="6">6th</option>
          <option value="7">7th</option>
          <option value="8">8th</option>
          <option value="9">9th</option>
          <option value="10">10th</option>
          <option value="11">11th</option>
          <option value="12">12th</option>
        </select>
      </div>
    </section>
  `;
}

export function createSummaryMessage() {
    document.querySelector("form").style.display = "none";
    const nameValue = document.getElementById("adult_name").value;
    const participantsValue = document.querySelectorAll('[class^="participant"]');
    const participantCount = participantsValue.length - 1;
    const summary = `Thank you ${nameValue} for registering. You have registered ${participantCount} participants and owe $${totalFees().toFixed(2)} in Fees.`;
    return summary;
}
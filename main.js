    function calculateBMI() {
      const weight = parseFloat(document.getElementById("weight").value);
      const height = parseFloat(document.getElementById("height").value);
      const result = document.getElementById("result");

      if (!weight || !height || height <= 0) {
        result.innerHTML = `<span class="text-danger">⚠️ Please enter valid weight and height.</span>`;
        return;
      }

      const heightInMeters = height / 100;
      const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      let classification = "";
      let extraMessage = "";

      if (bmi < 18.5) {
        classification = "Underweight";
        const targetWeight = 18.5 * heightInMeters * heightInMeters;
        const weightToGain = (targetWeight - weight).toFixed(1);
        extraMessage = `<br><span class="text-warning">👉 You need to gain at least <strong>${weightToGain} kg</strong> to reach a healthy BMI.</span>`;
      } else if (bmi < 24.9) {
        classification = "Normal weight";
      } else if (bmi < 29.9) {
        classification = "Overweight";
      } else {
        classification = "Obese";
      }

      result.innerHTML = `
        Your BMI is <span class="result-number">${bmi}</span><br>
        <span class="result-status">(${classification})</span>
        ${extraMessage}
      `;
    }

const courseNameInput = document.querySelector("#input-course-name");
const courseRatingInput = document.querySelector("#input-course-rating");
const addBtn = document.querySelector("#btn-add");
const coursesList = document.querySelector("#courses-list")
const alertController = document.querySelector('ion-alert-controller');

addBtn.addEventListener('click', () => {
    const enteredCourse = courseNameInput.value;
    const enteredRating = courseRatingInput. value;
    
    if (enteredCourse.trim().length <= 0 ||
        enteredRating.trim().length <= 0 ||
        enteredRating < 1 || 
        enteredRating > 5 
        ) {
            alertController.create({
                message: 'Please enter a valid reason and rating',
                header: 'Invalid Inputs',
                buttons:['Okay']
            })
            .then(alertElement => {
                alertElement.present();
            });
            return;
        }

    const newCourseRating = document.createElement('ion-item');
    newCourseRating.innerHTML = `<strong>${enteredCourse}:</strong>&nbsp;${enteredRating}/5`;
    coursesList.appendChild(newCourseRating);
});
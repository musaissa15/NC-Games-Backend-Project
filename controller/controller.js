const { response, request } = require("../app");
const {
  fetchCategories,
  fetchReviews,
	updateReviews,
  fetchUsers
} = require("../model/model");

exports.returnCategories = (request, response, next) => {
  fetchCategories()
    .then((categories) => {
      response.status(200).send({ categories });
    })
    .catch((error) => {
      next(error);
    });
};

exports.returnReviews = (request, response, next) => {
  const { review_id } = request.params;
  fetchReviews(review_id)
    .then((review) => {
      response.status(200).send({ review });
    })
    .catch((error) => {
      next(error);
    });
};

exports.returnUpdatedReviews = (request, response, next) => {
  const { review_id } = request.params;
  const { inc_votes } = request.body;
  updateReviews(review_id, inc_votes)
    .then((newReview) => {
      response.status(200).send({ review: newReview });
    })
    .catch((error) => {
      next(error);
    });
};

exports.returnUsers = (request, response) => {
	fetchUsers()
		.then((users) => {
	response.status(200).send({users})
})
	console.log("im in the controller <<<<<<")
}

const hakkinda=function(req, res, next) {
  res.render('hakkinda', { title: 'Hakkında', footer:'Tunc Kaan Dalkilic' });
}

module.exports={

	hakkinda
}

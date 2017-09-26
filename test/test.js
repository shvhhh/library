const chai = require('chai');
chai.use(require('chai-string'));
const assert = chai.assert;
//const api = require('../apis');
//const {createStudent,booksByAuth,bookById,bookByType,allBooks,bookReturn,bookIssue,studentLogin,libraryLogin}=api;
const supertest = require("supertest");


var server = supertest.agent("http://localhost:8081");

describe("Library Login",function(){

var test=[{case:"/login/library/admin/password",expected:"admin is logged in with token",status:200},{case:"/login/library/admin/library",expected:"wrong password",status:200},{case:"/login/library/ad/password",expected:"wrong username",status:200},{case:"/login/library/",expected:"you have reached some where you shouldn't be",status:404}];
test.forEach((test)=>
{
  it("should expect "+test.expected,function(done){

    // calling home page api
    server
    .post(test.case)
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      assert.equal(res.status, test.status);
      console.log(res.text);
      assert.startsWith(JSON.parse(res.text), test.expected);
      done();
    });
  });
}
)
})

describe("Student Login",function(){
  
  var test=[{case:"/login/student/shvhh/12345",expected:"is logged in with token",status:200},
  {case:"/login/student/admin/library",expected:"user not found",status:200},
  {case:"/login/student/shvhh/password",expected:"password is incorrect",status:200},
  {case:"/login/student/",expected:"you have reached some where you shouldn't be",status:404}];
  test.forEach((test)=>
  {
    it("should expect "+test.expected,function(done){
  
      // calling home page api
      server
      .post(test.case)
      .expect("Content-type",/json/)
      .expect(200) // THis is HTTP response
      .end(function(err,res){
        // HTTP status should be 200
        assert.equal(res.status, test.status);
        console.log(res.text);
        assert.equal(((JSON.parse(res.text)).indexOf(test.expected))>-1,true);
        done();
      });
    });
  }
  )
  })

  describe("Library Auth",function(){
    
    var test=[{case:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTA2NDExNDQ3LCJleHAiOjE1MDY3Njc4NDd9.BxgMuS_M6uq7-ux392fJLBrnO__5K0UQbnINLkEEk38",expected:"book added",status:200},
    {case:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTA2NDExNDQ3LCJleHAiOjE1MDY3Njc4NDd9.BxgMuS_M6uq7-ux392fJLBrnO__5K0UQbnINLkEEk3",expected:"invalid login",status:403},
    {case:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNodmhoIiwiaWF0IjoxNTA2NDE1NDY0LCJleHAiOjE1MDY0MTkwNjR9.8izZzPLISo1_5f44O0A7yScb_ucihfEexHrIcnvG0ak",expected:"unauthrised user",status:401},
    {case:"",expected:"please login first",status:200}];
    test.forEach((test)=>
    {
      it("should expect "+test.expected,function(done){
    
        // calling home page api
        server
        .post("/library/createbook/title/author/9")
        .expect("Content-type",/json/)
        .expect(200) // THis is HTTP response
        .set('auth', test.case)
        .end(function(err,res){
          // HTTP status should be 200
          assert.equal(res.status, test.status);
          console.log(res.text);
          assert.equal(res.text==test.expected||(JSON.parse(res.text)==test.expected),true);
          done();
        });
      });
    }
    )
    })
    describe("Student Auth",function(){
      
      var test=[{case:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNodmhoIiwiaWF0IjoxNTA2NDE1NDY0LCJleHAiOjE1MDY0MTkwNjR9.8izZzPLISo1_5f44O0A7yScb_ucihfEexHrIcnvG0ak",expected:'[{"id":8,"title":"Title69","author":"Author67","numbers":1,"booktype":3,"student":null,"dates":null}]',status:200},
      {case:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTA2NDExNDQ3LCJleHAiOjE1MDY3Njc4NDd9.BxgMuS_M6uq7-ux392fJLBrnO__5K0UQbnINLkEEk3",expected:"invalid login",status:403},
      {case:"",expected:"please login first",status:200}];
      test.forEach((test)=>
      {
        it("should expect "+test.expected,function(done){
      
          // calling home page api
          server
          .get("/student/id/8")
          .expect("Content-type",/json/)
          .expect(200) // THis is HTTP response
          .set('auth', test.case)
          .end(function(err,res){
            // HTTP status should be 200
            assert.equal(res.status, test.status);
            console.log(res.text);
            assert.equal(res.text==test.expected||(JSON.parse(res.text)==test.expected),true);
            done();
          });
        });
      }
      )
      })
/*
describe('booksByAuth()', function() {
  var tests = [
    {args:'Author10',       expected: 2},
    {args: 'Author14',    expected: 4},
    {args: 'Author2',    expected: 1},
    {args: 'Authorh',    expected: 1},
    {args: '',    expected: 0},
    {args: 'bookauthor',    expected: 1},
    {args: 'Author18', expected: 3}
  ];

  tests.forEach(function(test) {
    it("test case for "+test.args, function(done) {
      booksByAuth(test.args).then((array)=>{assert.equal(array.length, test.expected);done()})      
    });
  });
});*/

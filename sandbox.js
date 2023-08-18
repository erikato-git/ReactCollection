
// Controllers/AppUsers.cs

private readonly UserManager<AppUser> _userManager;
private readonly SignInManager<AppUser> _signInManager;
private readonly IEmailSender _emailSender;
private readonly RoleManager<IdentityRole> _roleManager;

public AppUsers(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager, IEmailSender emailSender, RoleManager<IdentityRole> roleManager)
{
    _userManager = userManager;
    _signInManager = signInManager;
    _emailSender = emailSender;
    _roleManager = roleManager;
}
